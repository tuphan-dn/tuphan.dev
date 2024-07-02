'use client'
import {
  Children,
  type ComponentProps,
  Fragment,
  cloneElement,
  isValidElement,
  useMemo,
  type ReactNode,
} from 'react'
import { v4 } from 'uuid'

export default function Tablist({
  children,
  name = v4(),
}: {
  children: ReactNode
  name?: string
}) {
  const tabs = useMemo(
    () =>
      Children.map(children, (child, i) => {
        if (!isValidElement<ComponentProps<typeof Tab>>(child)) return child
        return cloneElement(child, { name, defaultChecked: !i })
      }),
    [children, name],
  )
  return (
    <div role="tablist" className="tabs tabs-bordered">
      {tabs}
    </div>
  )
}

export function Tab({
  label,
  children,
  defaultChecked = false,
  name = '',
}: {
  label?: string
  children: ReactNode
  defaultChecked?: boolean
  name?: string
}) {
  return (
    <Fragment>
      <input
        type="radio"
        role="tab"
        className="tab first:ml-4 last:mr-4 relative top-4 text-xs opacity-60 checked:opacity-100"
        aria-label={label}
        name={name}
        defaultChecked={defaultChecked}
      />
      <div role="tabpanel" className="tab-content">
        {children}
      </div>
    </Fragment>
  )
}
