import { Field, ObjectType } from '@nestjs/graphql'
import { Report as ReportType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { Personality } from 'src/models/personalities/entities/personality.entity'

@ObjectType()
export class Report implements RestrictProperties<Report, ReportType> {
  createdAt: Date
  updatedAt: Date
  id: number
  reporter: string
  personalityId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}

@ObjectType()
export class GroupByPersonalities {
  @Field(() => Number, { nullable: true })
  _count: number
  @Field(() => Number, { nullable: true })
  personalityId: number
  @Field(() => Personality, { nullable: true })
  personality: Personality
}
