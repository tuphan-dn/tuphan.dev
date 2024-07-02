import type { MDXComponents } from 'mdx/types'

import Clipboard from './components/clipboard'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ defaultValue, children, ...props }) => {
      return (
        <pre {...props}>
          <div className="w-full p-2 flex flex-row items-center bg-base-100 text-base-content font-sans">
            <span className="grow ml-2 text-xs opacity-60">
              {props['aria-label']}
            </span>
            <Clipboard
              className="btn btn-xs btn-square btn-ghost"
              iconClassName="w-3 h-3 opacity-60"
              content={defaultValue?.toString() || ''}
            />
          </div>
          {children}
        </pre>
      )
    },
    ...components,
  }
}
