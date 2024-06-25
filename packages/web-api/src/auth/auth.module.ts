import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import * as process from 'process'
import { ConfigModule } from '@nestjs/config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { accountProviders } from '../account/account.providers'
import { databaseProviders } from '../database/database.providers'

console.log(process.env.JWT_SECRET)

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...accountProviders, ...databaseProviders],
})
export class AuthModule {}
