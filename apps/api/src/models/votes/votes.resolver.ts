import { Resolver, Query, Args, Subscription } from '@nestjs/graphql'
import { VotesService } from './votes.service'
import { OnVotedArgs, Vote } from './entities/vote.entity'
import { FindManyVoteArgs, FindUniqueVoteArgs } from './dto/find.args'
import { PubSubService } from 'src/common/pub-sub/pub-sub.service'

@Resolver(() => Vote)
export class VotesResolver {
  constructor(
    private readonly votesService: VotesService,
    private readonly pubSub: PubSubService,
  ) {}

  @Query(() => [Vote], { name: 'votes' })
  findAll(@Args() args: FindManyVoteArgs) {
    return this.votesService.findAll(args)
  }

  @Query(() => Vote, { name: 'vote' })
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
}
