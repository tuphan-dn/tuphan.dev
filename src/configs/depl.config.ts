import { Env, env } from './env'

/**
 * Contructor
 */
type Conf = {
  host: string
  notionDatabaseId: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    host: 'http://localhost:3000',
    notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  },

  /**
   * Production configurations
   */
  production: {
    host: process.env.DOMAIN || '',
    notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  },
}

/**
 * Module exports
 */
export default conf[env]
