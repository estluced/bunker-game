import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { JwtService } from '@nestjs/jwt'
import { createHash } from 'crypto'
import { ACCOUNT_MODEL } from '../constants'
import { Account } from '../account/account.interface'
import { CreateAccountDto } from './dtos/create-account.dto'
import { LoginAccountDto } from './dtos/login-account.dto'

@Injectable()
export class AuthService {
  constructor(
    @Inject(ACCOUNT_MODEL)
    private accountModel: Model<Account>,
    private readonly jwtService: JwtService
  ) {}

  private signJwt(email: string, id: string): string {
    return this.jwtService.sign({ email, sub: id })
  }

  private createPasswordSalt(): string {
    return Math.random().toString(36).substring(2, 15)
  }

  private hashPassword(password: string, salt: string): string {
    return createHash('sha256')
      .update(password + salt)
      .digest('hex')
      .toString()
  }

  async login(loginInfo: LoginAccountDto): Promise<{ access_token: string }> {
    const account = await this.accountModel
      .findOne({
        nickname: loginInfo.nickname,
      })
      .then((account) => account?.toObject() as Account | null)

    if (!account) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Account not found',
        },
        HttpStatus.UNAUTHORIZED
      )
    }

    const passwordHash = this.hashPassword(loginInfo.password, account.salt)

    if (passwordHash !== account.password) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Invalid credentials',
        },
        HttpStatus.UNAUTHORIZED
      )
    }

    return {
      access_token: this.signJwt(account.email, account._id.toString()),
    }
  }

  async create(account: CreateAccountDto): Promise<{ access_token: string }> {
    try {
      const passwordSalt = this.createPasswordSalt()
      const passwordHash = this.hashPassword(account.password, passwordSalt)
      const createdAccount = new this.accountModel({
        ...account,
        password: passwordHash,
        salt: passwordSalt,
      })
      const savedAccount: Account = await createdAccount.save()

      return {
        access_token: this.signJwt(
          savedAccount.email,
          savedAccount._id.toString()
        ),
      }
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'Nickname already exists',
          },
          HttpStatus.CONFLICT
        )
      }
    }
  }
}
