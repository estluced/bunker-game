import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as dotenv from 'dotenv'
import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module'
import { DatabaseModule } from './database/database.module'

dotenv.config()

@Module({
  imports: [ConfigModule.forRoot(), AccountModule, AuthModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
