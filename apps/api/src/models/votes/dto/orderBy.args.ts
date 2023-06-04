import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { PersonalityOrderByWithRelationInput } from 'src/models/personalities/dto/orderBy.args'

@InputType()
export class VoteOrderByWithRelationInput
  implements
    RestrictProperties<
      VoteOrderByWithRelationInput,
      Prisma.VoteOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  vote: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  voter: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  personalityId: Prisma.SortOrder
  @Field(() => PersonalityOrderByWithRelationInput, { nullable: true })
  personality: PersonalityOrderByWithRelationInput
}

@InputType()
export class VoteOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
