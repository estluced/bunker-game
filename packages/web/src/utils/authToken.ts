export const getTokenFromCookie = (): string | undefined => {
  const cookies = document.cookie.split(';')
  const tokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith('auth_token=')
  )

  return tokenCookie?.split('=')[1]
}

export const setTokenToCookie = (token: string) => {
  document.cookie = `auth_token=${token}; path=/`
}
