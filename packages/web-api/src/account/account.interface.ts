import { Document } from 'mongoose'

export interface Account extends Document {
  email: string
  password: string
  firstName: string
  lastName: string
  nickname: string
  salt: string
}
