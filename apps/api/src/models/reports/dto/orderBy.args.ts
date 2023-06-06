import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { PersonalityOrderByWithRelationInput } from 'src/models/personalities/dto/orderBy.args'

@InputType()
export class ReportOrderByWithRelationInput
  implements
    RestrictProperties<
      ReportOrderByWithRelationInput,
      Prisma.ReportOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  reporter: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  personalityId: Prisma.SortOrder
  @Field(() => PersonalityOrderByWithRelationInput, { nullable: true })
  personality: PersonalityOrderByWithRelationInput
}

@InputType()
export class ReportOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
