'use client'

import TextField from '@/components/TextField'
import Button from '@/components/Button'
import {
  useCallback,
  useState,
  ChangeEventHandler,
  FormEvent,
  useEffect,
} from 'react'
import { validateNickname, validatePassword } from '@/utils/validations'
import { login } from '@/api/auth'

const Auth = () => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }, [])

  const handleChangeNickname: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setNickname(e.currentTarget.value), [])

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setPassword(e.currentTarget.value), [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(process)

      if (validatePassword(password) && validateNickname(nickname)) {
        void login(nickname, password).then((response) => {
          console.log(response)
        })
      }
    },
    [nickname, password]
  )

  return (
    <div className="flex h-screen justify-center">
      <div className="container flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex h-1/3 w-64 flex-col gap-2 align-middle"
        >
          <p className="mb-2 w-36 text-start text-2xl font-bold">
            Authorization
          </p>
          <TextField
            onChange={handleChangeNickname}
            type="text"
            placeholder="Nickname"
          />
          <TextField
            onChange={handleChangePassword}
            type="password"
            placeholder="Password"
          />
          <Button className="self-end">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Auth
