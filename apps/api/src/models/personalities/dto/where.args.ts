import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ReportListRelationFilter } from 'src/models/reports/dto/where.args'
import { VoteListRelationFilter } from 'src/models/votes/dto/where.args'

@InputType()
export class PersonalityWhereUniqueInput
  implements
    RestrictProperties<
      PersonalityWhereUniqueInput,
      Prisma.PersonalityWhereUniqueInput
    >
{
  @Field(() => Number, { nullable: true })
  id: number
  @Field(() => String, { nullable: true })
  name: string
}

@InputType()
export class PersonalityWhereInput
  implements
    RestrictProperties<PersonalityWhereInput, Prisma.PersonalityWhereInput>
{
  @Field(() => ReportListRelationFilter, { nullable: true })
  Report: ReportListRelationFilter
  @Field(() => StringFilter, { nullable: true })
  creator: StringFilter
  @Field(() => VoteListRelationFilter, { nullable: true })
  votes: VoteListRelationFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => IntFilter, { nullable: true })
  upvotes: IntFilter
  @Field(() => IntFilter, { nullable: true })
  downvotes: IntFilter

  @Field(() => [PersonalityWhereInput], { nullable: true })
  AND: PersonalityWhereInput[]
  @Field(() => [PersonalityWhereInput], { nullable: true })
  OR: PersonalityWhereInput[]
  @Field(() => [PersonalityWhereInput], { nullable: true })
  NOT: PersonalityWhereInput[]
}

@InputType()
export class PersonalityListRelationFilter {
  @Field(() => PersonalityWhereInput, { nullable: true })
  every: PersonalityWhereInput
  @Field(() => PersonalityWhereInput, { nullable: true })
  some: PersonalityWhereInput
  @Field(() => PersonalityWhereInput, { nullable: true })
  none: PersonalityWhereInput
}

@InputType()
export class PersonalityRelationFilter {
  @Field(() => PersonalityWhereInput, { nullable: true })
  is: PersonalityWhereInput
  @Field(() => PersonalityWhereInput, { nullable: true })
  isNot: PersonalityWhereInput
}
