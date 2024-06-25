import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  const configService = app.get(ConfigService)
  const port = configService.get<number>('PORT', { infer: true })
  await app.listen(port)

  return `Server running on http://localhost:${port}`
}

void bootstrap().then(console.log).catch(console.error)
