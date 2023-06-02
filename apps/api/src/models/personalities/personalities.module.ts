import { Module } from '@nestjs/common'
import { PersonalitiesService } from './personalities.service'
import { PersonalitiesResolver } from './personalities.resolver'

@Module({
  providers: [PersonalitiesResolver, PersonalitiesService],
  exports: [PersonalitiesService],
})
export class PersonalitiesModule {}
