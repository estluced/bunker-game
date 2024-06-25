import { IsNotEmpty } from 'class-validator'

export class LoginAccountDto {
  @IsNotEmpty()
  nickname: string

  @IsNotEmpty()
  password: string
}
