import { ObjectType } from '@nestjs/graphql'
import { Personality as PersonalityType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Personality
  implements RestrictProperties<Personality, PersonalityType>
{
  id: number
  name: string
  upvotes: number
  downvotes: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
