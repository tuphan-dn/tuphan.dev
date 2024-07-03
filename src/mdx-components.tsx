import type { MDXComponents } from 'mdx/types'

import Pre, { Tabs, Tab } from './components/md/highlight'
import Contributors from './components/md/contributors'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    Tabs,
    Tab,
    Contributors,
    ...components,
  }
}
