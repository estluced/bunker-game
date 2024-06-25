// eslint-disable-next-line import/no-extraneous-dependencies
import { Connection } from 'mongoose'
import { ACCOUNT_MODEL, DATABASE_CONNECTION } from '../constants'
import { AccountSchema } from '../schemas/account.schema'

export const accountProviders = [
  {
    provide: ACCOUNT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Account', AccountSchema),
    inject: [DATABASE_CONNECTION],
  },
]
