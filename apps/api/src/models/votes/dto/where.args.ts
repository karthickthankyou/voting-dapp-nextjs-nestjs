import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { PersonalityRelationFilter } from 'src/models/personalities/dto/where.args'

@InputType()
export class VoteNameVoterCompoundUniqueInput {
  name: string
  voter: string
}

@InputType()
export class VoteWhereUniqueInput
  implements
    RestrictProperties<VoteWhereUniqueInput, Prisma.VoteWhereUniqueInput>
{
  @Field(() => VoteNameVoterCompoundUniqueInput, { nullable: true })
  name_voter: VoteNameVoterCompoundUniqueInput
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class VoteWhereInput
  implements RestrictProperties<VoteWhereInput, Prisma.VoteWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => IntFilter, { nullable: true })
  vote: IntFilter
  @Field(() => StringFilter, { nullable: true })
  voter: StringFilter
  @Field(() => IntFilter, { nullable: true })
  personalityId: IntFilter
  @Field(() => PersonalityRelationFilter, { nullable: true })
  personality: PersonalityRelationFilter

  @Field(() => [VoteWhereInput], { nullable: true })
  AND: VoteWhereInput[]
  @Field(() => [VoteWhereInput], { nullable: true })
  OR: VoteWhereInput[]
  @Field(() => [VoteWhereInput], { nullable: true })
  NOT: VoteWhereInput[]
}

@InputType()
export class VoteListRelationFilter {
  @Field(() => VoteWhereInput, { nullable: true })
  every: VoteWhereInput
  @Field(() => VoteWhereInput, { nullable: true })
  some: VoteWhereInput
  @Field(() => VoteWhereInput, { nullable: true })
  none: VoteWhereInput
}

@InputType()
export class VoteRelationFilter {
  @Field(() => VoteWhereInput, { nullable: true })
  is: VoteWhereInput
  @Field(() => VoteWhereInput, { nullable: true })
  isNot: VoteWhereInput
}
