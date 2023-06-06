import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { PersonalityRelationFilter } from 'src/models/personalities/dto/where.args'

@InputType()
export class ReportReporterPersonalityIdCompoundUniqueInput {
  reporter: string
  personalityId: number
}

@InputType()
export class ReportWhereUniqueInput
  implements
    RestrictProperties<ReportWhereUniqueInput, Prisma.ReportWhereUniqueInput>
{
  @Field(() => ReportReporterPersonalityIdCompoundUniqueInput, {
    nullable: true,
  })
  reporter_personalityId: ReportReporterPersonalityIdCompoundUniqueInput
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ReportWhereInput
  implements RestrictProperties<ReportWhereInput, Prisma.ReportWhereInput>
{
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  reporter: StringFilter
  @Field(() => IntFilter, { nullable: true })
  personalityId: IntFilter
  @Field(() => PersonalityRelationFilter, { nullable: true })
  personality: PersonalityRelationFilter
  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [ReportWhereInput], { nullable: true })
  AND: ReportWhereInput[]
  @Field(() => [ReportWhereInput], { nullable: true })
  OR: ReportWhereInput[]
  @Field(() => [ReportWhereInput], { nullable: true })
  NOT: ReportWhereInput[]
}

@InputType()
export class ReportListRelationFilter {
  @Field(() => ReportWhereInput, { nullable: true })
  every: ReportWhereInput
  @Field(() => ReportWhereInput, { nullable: true })
  some: ReportWhereInput
  @Field(() => ReportWhereInput, { nullable: true })
  none: ReportWhereInput
}

@InputType()
export class ReportRelationFilter {
  @Field(() => ReportWhereInput, { nullable: true })
  is: ReportWhereInput
  @Field(() => ReportWhereInput, { nullable: true })
  isNot: ReportWhereInput
}
