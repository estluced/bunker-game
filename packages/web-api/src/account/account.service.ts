import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { JwtService } from '@nestjs/jwt'
import { ACCOUNT_MODEL } from '../constants'
import { Account } from './account.interface'

@Injectable()
export class AccountService {
  constructor(
    @Inject(ACCOUNT_MODEL)
    private accountModel: Model<Account>,
    private readonly jwtService: JwtService
  ) {}

  private decodeJwt(token: string): { email: string; sub: string } {
    return this.jwtService.decode(token)
  }

  async getMe(token: string): Promise<Account | null> {
    const decodedToken = this.decodeJwt(token)

    return this.accountModel
      .findOne({
        _id: decodedToken.sub,
      })
      .lean()
      .then((account) => ({
        ...account,
        _id: account._id.toString(),
      }))
  }
}
