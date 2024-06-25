type EnvKeys = 'NEXT_PUBLIC_API_URL'

const getConfigVariable = (key: EnvKeys) => {
  console.log(process.env, key)
  const value = process.env[key]

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }

  return value
}

export default getConfigVariable
