import { Injectable } from '@nestjs/common'
import {
  FindManyPersonalityArgs,
  FindUniquePersonalityArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class PersonalitiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(args: FindManyPersonalityArgs) {
    return this.prisma.personality.findMany(args)
  }

  findOne(args: FindUniquePersonalityArgs) {
    return this.prisma.personality.findUnique(args)
  }
}
