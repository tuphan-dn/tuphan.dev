/**
 * Environment
 */
const getEnv = () => {
  switch (process.env.NEXT_PUBLIC_ENV) {
    case 'development':
      return 'development'
    case 'production':
      return 'production'
    default:
      return 'development'
  }
}
export type Env = 'development' | 'production'
export const env: Env = getEnv()
