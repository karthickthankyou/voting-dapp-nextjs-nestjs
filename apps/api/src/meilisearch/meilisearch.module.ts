// meilisearch.module.ts
import { Global, Module } from '@nestjs/common'
import { MeilisearchService } from './meilisearch.service'
import { MeilisearchController } from './meilisearch.controller'

@Global()
@Module({
  providers: [MeilisearchService],
  controllers: [MeilisearchController],
  exports: [MeilisearchService],
})
export class MeilisearchModule {}
