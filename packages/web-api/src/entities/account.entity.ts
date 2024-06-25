import { Exclude } from 'class-transformer'

export class AccountEntity {
  email: string

  @Exclude()
  password: string

  firstName: string

  lastName: string

  nickname: string

  @Exclude()
  salt: string

  constructor(partial: Partial<AccountEntity>) {
    // noinspection TypeScriptValidateTypes
    Object.assign(this, partial)
  }
}
