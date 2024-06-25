import {
  Controller,
  Get,
  UseGuards,
  Headers,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common'
import { AccountService } from './account.service'
import { AuthGuard } from '../auth/auth.guard'
import { AccountEntity } from '../entities/account.entity'

@Controller('account')
export class AccountController {
  constructor(private readonly appService: AccountService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@Headers() headers: Record<string, string>) {
    const token = headers.authorization?.split(' ')[1]

    const account = await this.appService.getMe(token)

    return new AccountEntity(account)
  }
}
