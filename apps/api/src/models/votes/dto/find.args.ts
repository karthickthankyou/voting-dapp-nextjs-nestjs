import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { VoteOrderByWithRelationInput } from './orderBy.args'
import { VoteWhereInput, VoteWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.VoteScalarFieldEnum, {
  name: 'VoteScalarFieldEnum',
})

@ArgsType()
export class FindManyVoteArgs
  implements RestrictProperties<FindManyVoteArgs, Omit<Prisma.VoteFindManyArgs, 'include' | 'select'>>
{
  @Field(() => VoteWhereInput, { nullable: true })
  where: VoteWhereInput
  @Field(() => [VoteOrderByWithRelationInput], { nullable: true })
  orderBy: VoteOrderByWithRelationInput[]
  @Field(() => VoteWhereUniqueInput, { nullable: true })
  cursor: VoteWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.VoteScalarFieldEnum], { nullable: true })
  distinct: Prisma.VoteScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueVoteArgs {
  @Field({ nullable: true })
  where: VoteWhereUniqueInput
}