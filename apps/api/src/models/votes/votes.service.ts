import { Injectable } from '@nestjs/common'
import { FindManyVoteArgs, FindUniqueVoteArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(args: FindManyVoteArgs) {
    return this.prisma.vote.findMany(args)
  }

  findOne(args: FindUniqueVoteArgs) {
    return this.prisma.vote.findUnique(args)
  }
}
