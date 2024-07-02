import type { MDXComponents } from 'mdx/types'

import Clipboard from './components/clipboard'
import Tablist, { Tab } from './components/md/tabs'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-content'?: string
    'data-group'?: string
    'data-label'?: string
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ ['data-content']: content, children, ...props }) => {
      return (
        <pre {...props}>
          {children}
          <div className="w-full p-2 flex flex-row items-center bg-base-100 text-base-content font-sans">
            <span className="grow ml-2 text-xs opacity-60">
              {props['data-label']}
            </span>
            <Clipboard
              className="btn btn-xs btn-square btn-ghost"
              iconClassName="w-3 h-3 opacity-60"
              content={content?.toString() || ''}
            />
          </div>
        </pre>
      )
    },
    Tablist,
    Tab,
    ...components,
  }
}
