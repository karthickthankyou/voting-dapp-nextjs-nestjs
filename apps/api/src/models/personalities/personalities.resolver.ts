import { Resolver, Query, Args } from '@nestjs/graphql'
import { PersonalitiesService } from './personalities.service'
import { Personality } from './entities/personality.entity'
import {
  FindManyPersonalityArgs,
  FindUniquePersonalityArgs,
} from './dto/find.args'

@Resolver(() => Personality)
export class PersonalitiesResolver {
  constructor(private readonly personalitiesService: PersonalitiesService) {}

  @Query(() => [Personality], { name: 'personalities' })
  findAll(@Args() args: FindManyPersonalityArgs) {
    return this.personalitiesService.findAll(args)
  }

  @Query(() => Personality, { name: 'personality' })
  findOne(@Args() args: FindUniquePersonalityArgs) {
    return this.personalitiesService.findOne(args)
  }
}
