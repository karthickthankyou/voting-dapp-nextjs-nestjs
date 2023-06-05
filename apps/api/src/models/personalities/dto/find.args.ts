import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PersonalityOrderByWithRelationInput } from './orderBy.args'
import {
  PersonalityWhereInput,
  PersonalityWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.PersonalityScalarFieldEnum, {
  name: 'PersonalityScalarFieldEnum',
})

@ArgsType()
export class FindManyPersonalityArgs
  implements
    RestrictProperties<
      FindManyPersonalityArgs,
      Omit<Prisma.PersonalityFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => PersonalityWhereInput, { nullable: true })
  where: PersonalityWhereInput
  @Field(() => [PersonalityOrderByWithRelationInput], { nullable: true })
  orderBy: PersonalityOrderByWithRelationInput[]
  @Field(() => PersonalityWhereUniqueInput, { nullable: true })
  cursor: PersonalityWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.PersonalityScalarFieldEnum], { nullable: true })
  distinct: Prisma.PersonalityScalarFieldEnum[]
}

@ArgsType()
export class FindUniquePersonalityArgs {
  @Field({ nullable: true })
  where: PersonalityWhereUniqueInput
}
