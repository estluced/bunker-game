export const login = async (nickname: string, password: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Failed to login')
  })
}
