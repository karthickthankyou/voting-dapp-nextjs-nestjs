import { Injectable } from '@nestjs/common'
import Web3 from 'web3'
import * as dotenv from 'dotenv'
import { abi } from 'src/util'
import { AbiItem } from 'web3-utils'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { MeilisearchService } from 'src/meilisearch/meilisearch.service'

export const contractAddress = '0x989E4C49390D81705D86a0B8Ba2cd821035635AF'
dotenv.config()

@Injectable()
export class EthersService {
  private readonly web3: Web3
  private readonly contract: any

  constructor(
    private readonly prisma: PrismaService,
    private readonly meili: MeilisearchService,
  ) {
    console.log('WSS_URL ', process.env.WSS_URL)
    this.web3 = new Web3(process.env.WSS_URL)

    this.contract = new this.web3.eth.Contract(
      abi as AbiItem[],
      contractAddress,
    )

    this.testConnection()
    this.initializeListeners()
  }

  private async testConnection() {
    console.log('testConnection ')
    try {
      const blockNumber = await this.web3.eth.getBlockNumber()
      console.log('blockNumber ', blockNumber)
      console.log('Connected to blockchain, latest block number:', blockNumber)
    } catch (err) {
      console.log('failed?')
      console.error('Failed to connect to blockchain:', err)
    }
  }

  private initializeListeners() {
    this.contract.events
      .PersonalityCreated(
        {
          fromBlock: 'latest',
        },
        async (error, event) => {
          console.log(event)
          const { name } = event.returnValues
          const personality = await this.prisma.personality.create({
            data: { name, downvotes: 0, upvotes: 0 },
          })

          await this.meili.addToIndex([{ name, id: personality.id }])
          // Add your logic here
          console.log('Event ', event)
        },
      )
      .on('connected', (str) =>
        console.log('PersonalityCreated listening...', str),
      )
      .on('error', (str) => console.log('PersonalityCreated event error', str))

    this.contract.events
      .VotingUpdated(
        {
          fromBlock: 'latest',
        },
        async (error, event) => {
          console.log(event)
          const { name, upvotes, downvotes } = event.returnValues
          await this.prisma.personality.update({
            where: { name },
            data: { downvotes: +downvotes, upvotes: +upvotes },
          })
          // Add your logic here
          console.log('Event ', event)
        },
      )
      .on('connected', (str) => console.log('VotingUpdated listening...', str))
  }
}
