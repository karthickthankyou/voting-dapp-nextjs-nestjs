import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { GroupByPersonalitiesType, ReportsService } from './reports.service'
import { GroupByPersonalities, Report } from './entities/report.entity'
import { FindManyReportArgs, FindUniqueReportArgs } from './dto/find.args'
import { CreateReportInput } from './dto/create-report.input'
import { GetAddress } from 'src/common/decorators/auth.decorator'
import { EthersService } from 'src/ethers/ethers.service'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AggregateCountOutput } from 'src/common/dtos/common.input'

@Resolver(() => Report)
export class ReportsResolver {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly ether: EthersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Report)
  createReport(
    @Args('createReportInput') args: CreateReportInput,
    @GetAddress() address: string,
  ) {
    return this.reportsService.create(args, address)
  }

  @Query(() => [Report], { name: 'reports' })
  findAll(@Args() args: FindManyReportArgs, @GetAddress() address: string) {
    // const isOwner = this.ether.isOwner(address)
    // if (!isOwner) {
    //   throw new UnauthorizedException('You are not the owner.')
    // }
    return this.reportsService.findAll(args)
  }

  @Query(() => Report, { name: 'report' })
  findOne(@Args() args: FindUniqueReportArgs) {
    return this.reportsService.findOne(args)
  }

  @Query(() => [GroupByPersonalities], { name: 'groupByPersonalities' })
  async groupByPersonalities(
    @Args('take') take: number,
    @Args('skip') skip: number,
  ) {
    const result: GroupByPersonalitiesType =
      await this.reportsService.groupByPersonalities(take, skip)
    const ids = result.map((person) => person.personalityId)

    const personalities = await this.prisma.personality.findMany({
      where: { id: { in: ids } },
    })
    return result.map((item) => {
      return {
        ...item,
        personality: personalities.find(
          (personality) => personality.id === item.personalityId,
        ),
      }
    })
  }
  @Query(() => AggregateCountOutput, { name: 'groupByPersonalitiesCount' })
  async groupByPersonalitiesCount() {
    //   Having issues with the count + distinct. So using groupBy to get the count.
    const personalities = await this.prisma.report.groupBy({
      by: ['personalityId'],
    })
    const personalityCount = personalities.length
    console.log('personalityCount', personalityCount)
    return { count: personalityCount }
  }
}
