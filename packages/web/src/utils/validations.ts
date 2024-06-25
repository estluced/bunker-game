export const validatePassword = (password: string) => {
  return password.length >= 8
}

export const validateNickname = (nickname: string) => {
  return nickname.length >= 4
}
