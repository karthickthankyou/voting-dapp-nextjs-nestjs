import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { Vote as VoteType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Vote implements RestrictProperties<Vote, VoteType> {
  id: number
  name: string
  vote: number
  voter: string
  personalityId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}

@ArgsType()
export class OnVotedArgs {
  @Field()
  address: string
}
