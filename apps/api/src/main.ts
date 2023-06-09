import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [
      'https://voting-dapp-nextjs-nestjs-web.vercel.app',
      'https://personalities.iamkarthick.com',
      'https://studio.apollographql.com',
      'http://localhost:3001',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: 'Content-Type, Accept, Authorization',
  })
  await app.listen(3000)
}

process.on('uncaughtException', (err) => {
  console.error('Unhandled exception', err)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection', reason)
})

bootstrap()
