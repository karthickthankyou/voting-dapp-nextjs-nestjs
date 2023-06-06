import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './common/prisma/prisma.module'
import { MeilisearchModule } from './meilisearch/meilisearch.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

import { EthersModule } from './ethers/ethers.module'
import { PersonalitiesModule } from './models/personalities/personalities.module'
import { VotesModule } from './models/votes/votes.module'
import { PubSubModule } from './common/pub-sub/pub-sub.module'
import { ReportsModule } from './models/reports/reports.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      context: ({ req }) => {
        // return the headers, among other things
        return {
          headers: req.headers,
          // other context properties...
        }
      },
    }),
    PrismaModule,
    MeilisearchModule,
    EthersModule,
    PubSubModule,

    PersonalitiesModule,
    VotesModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
