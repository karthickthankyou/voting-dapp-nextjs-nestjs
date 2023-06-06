import {
  Resolver,
  Query,
  Args,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { VotesService } from './votes.service'
import { OnVotedArgs, Vote } from './entities/vote.entity'
import { FindManyVoteArgs, FindUniqueVoteArgs } from './dto/find.args'
import { PubSubService } from 'src/common/pub-sub/pub-sub.service'
import { Personality } from '../personalities/entities/personality.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AggregateCountOutput } from 'src/common/dtos/common.input'
import { VoteWhereInput } from './dto/where.args'

@Resolver(() => Vote)
export class VotesResolver {
  constructor(
    private readonly votesService: VotesService,
    private readonly pubSub: PubSubService,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => [Vote], { name: 'votes' })
  findAll(@Args() args: FindManyVoteArgs) {
    return this.votesService.findAll(args)
  }

  @Query(() => Vote, { name: 'vote', nullable: true })
  findOne(@Args() args: FindUniqueVoteArgs) {
    return this.votesService.findOne(args)
  }

  @Subscription(() => Vote, {
    name: 'onVoted',
    nullable: true,
    filter: (payload: Vote, variables) => payload.voter === variables.address,
  })
  onVoted(@Args() args: OnVotedArgs): AsyncIterator<Vote> {
    console.log('Connected...')
    return this.pubSub.asyncIterator('onVoted')
  }

  @ResolveField(() => Personality, { nullable: true })
  personality(@Parent() parent: Vote) {
    return this.prisma.personality.findUnique({
      where: { id: parent.personalityId },
    })
  }

  @Query(() => AggregateCountOutput, {
    name: 'votesCount',
  })
  async votesCount(
    @Args('where', { nullable: true })
    where: VoteWhereInput,
  ) {
    const votes = await this.prisma.vote.aggregate({
      _count: { _all: true },
      where,
    })
    return { count: votes._count._all }
  }
}
