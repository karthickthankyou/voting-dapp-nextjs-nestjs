import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['https://studio.apollographql.com', 'http://localhost:3001'],
    methods: 'POST',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  })
  await app.listen(3000)
}
bootstrap()
