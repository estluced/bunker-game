import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateAccountDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  firstName: string

  lastName: string

  @IsNotEmpty()
  nickname: string
}
