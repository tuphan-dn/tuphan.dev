'use client'
import {
  DetailedHTMLProps,
  Fragment,
  HTMLAttributes,
  type ReactNode,
} from 'react'
import clsx from 'clsx'

import Clipboard from '@/components/clipboard'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-content'?: string
    'data-group'?: string
    'data-label'?: string
  }
}

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>

export default function Pre({
  ['data-content']: content,
  children,
  className,
  ...props
}: PreProps) {
  return (
    <pre
      className={clsx(
        className,
        'grid p-0 rounded-box ring-2 ring-base-300 group',
      )}
      {...props}
    >
      <Clipboard
        className="invisible group-hover:visible absolute top-2 right-2 btn btn-xs btn-square btn-ghost"
        iconClassName="w-3 h-3 opacity-60"
        content={content?.toString() || ''}
      />
      {children}
    </pre>
  )
}

export type TabsProps = { children: ReactNode }

export function Tabs({ children }: TabsProps) {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      {children}
    </div>
  )
}

export type TabProps = {
  label: string
  group: string
  children: ReactNode
  defaultChecked?: boolean
}

export function Tab({
  label,
  group,
  children,
  defaultChecked = false,
}: TabProps) {
  return (
    <Fragment>
      <input
        type="radio"
        role="tab"
        className="tab first:ml-4 last:mr-4 relative top-4 text-xs opacity-60 checked:opacity-100"
        aria-label={label}
        name={group}
        defaultChecked={defaultChecked}
      />
      <div role="tabpanel" className="tab-content">
        {children}
      </div>
    </Fragment>
  )
}
