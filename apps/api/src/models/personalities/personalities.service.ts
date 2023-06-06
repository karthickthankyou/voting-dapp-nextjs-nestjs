import { Injectable } from '@nestjs/common'
import {
  FindManyPersonalityArgs,
  FindUniquePersonalityArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { MeilisearchService } from 'src/meilisearch/meilisearch.service'

@Injectable()
export class PersonalitiesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly meili: MeilisearchService,
  ) {}

  async findAll(
    { cursor, distinct, orderBy, skip, take, where }: FindManyPersonalityArgs,
    searchTerm?: string,
  ) {
    if (searchTerm && searchTerm.trim() !== '') {
      const searchResults = await this.meili.search({
        query: searchTerm,
        limit: 10,
      })
      const ids = searchResults.hits.map((hit) => hit.id)

      return this.prisma.personality.findMany({
        orderBy,
        where: { ...where, id: { in: ids } },
      })
    } else {
      return this.prisma.personality.findMany({
        cursor,
        distinct,
        orderBy,
        skip,
        take,
        where,
      })
    }
  }

  findOne(args: FindUniquePersonalityArgs) {
    return this.prisma.personality.findUnique(args)
  }
}
