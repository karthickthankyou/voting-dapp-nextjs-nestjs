import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  UnauthorizedException,
} from '@nestjs/common'
import { INDEX_NAME, MeilisearchService } from './meilisearch.service'

@Controller('search')
export class MeilisearchController {
  constructor(private readonly meili: MeilisearchService) {}

  @Get()
  async search(
    @Query('query') query: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ) {
    console.log('offset limit ', offset, limit)
    return await this.meili.search({
      query,
      offset: offset ? Number(offset) : undefined,
      limit: limit ? Number(limit) : undefined,
    })
  }

  @Get('is-healthy')
  async isHealthy(@Request() req) {
    console.log(process.env.SECRET_ACCESS_KEY)
    if (req.headers['x-secret-access-key'] !== process.env.SECRET_ACCESS_KEY) {
      throw new UnauthorizedException()
    }

    return this.meili.client.isHealthy()
  }

  @Post('delete-all')
  async deleteAll(@Request() req) {
    if (req.headers['x-secret-access-key'] !== process.env.SECRET_ACCESS_KEY) {
      throw new UnauthorizedException()
    }
    const searchIndex = await this.meili.client.getIndex(INDEX_NAME)

    await searchIndex.deleteAllDocuments()
    return { message: 'All items deleted successfully' }
  }
}
