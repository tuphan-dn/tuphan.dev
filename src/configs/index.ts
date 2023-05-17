import { env } from './env'
import cluster from './cluster.config'
import uid from './uid.config'

const configs = {
  env,
  cluster: cluster[env],
  uid: uid[env],
}

/**
 * Module exports
 */
export default configs
