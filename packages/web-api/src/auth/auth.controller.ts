import { Controller, Post, Body } from '@nestjs/common'
import { CreateAccountDto } from './dtos/create-account.dto'
import { AuthService } from './auth.service'
import { LoginAccountDto } from './dtos/login-account.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() account: CreateAccountDto) {
    return this.authService.create(account)
  }

  @Post('login')
  async login(@Body() loginInfo: LoginAccountDto) {
    return this.authService.login(loginInfo)
  }
}
