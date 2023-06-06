import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ReportOrderByRelationAggregateInput } from 'src/models/reports/dto/orderBy.args'
import { VoteOrderByRelationAggregateInput } from 'src/models/votes/dto/orderBy.args'

@InputType()
export class PersonalityOrderByWithRelationInput
  implements
    RestrictProperties<
      PersonalityOrderByWithRelationInput,
      Prisma.PersonalityOrderByWithRelationInput
    >
{
  @Field(() => ReportOrderByRelationAggregateInput, { nullable: true })
  Report: ReportOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder, { nullable: true })
  creator: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  upvotes: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  downvotes: Prisma.SortOrder
  @Field(() => VoteOrderByRelationAggregateInput, { nullable: true })
  votes: VoteOrderByRelationAggregateInput
}

@InputType()
export class PersonalityOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
