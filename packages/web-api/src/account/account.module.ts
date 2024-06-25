import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import * as process from 'process'
import { ConfigModule } from '@nestjs/config'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'
import { accountProviders } from './account.providers'
import { databaseProviders } from '../database/database.providers'

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
  controllers: [AccountController],
  providers: [AccountService, ...accountProviders, ...databaseProviders],
})
export class AccountModule {}
