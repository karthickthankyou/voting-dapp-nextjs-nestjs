import { Resolver, Query, Args } from '@nestjs/graphql'
import { VotesService } from './votes.service'
import { Vote } from './entities/vote.entity'
import { FindManyVoteArgs, FindUniqueVoteArgs } from './dto/find.args'

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) {}

  @Query(() => [Vote], { name: 'votes' })
  findAll(@Args() args: FindManyVoteArgs) {
    return this.votesService.findAll(args)
  }

  @Query(() => Vote, { name: 'vote' })
  findOne(@Args() args: FindUniqueVoteArgs) {
    return this.votesService.findOne(args)
  }
}
