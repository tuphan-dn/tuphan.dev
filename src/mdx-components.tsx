import type { MDXComponents } from 'mdx/types'

import Pre, { Tabs, Tab } from './components/md/tabs'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    Tabs,
    Tab,
    ...components,
  }
}
