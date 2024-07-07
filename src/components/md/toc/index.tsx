import { ComponentProps } from 'react'
import clsx from 'clsx'

import './index.scss'

export type TocProps = ComponentProps<'nav'>

export default function Toc({ className, ...props }: TocProps) {
  return (
    <div className="fixed top-[50%] -translate-y-[50%] right-0 cursor-pointer group z-10">
      <nav
        className={clsx(
          'toc-anchor animate-pop-in',
          'block group-hover:hidden',
          className,
        )}
        {...props}
      />
      <nav
        className={clsx(
          'toc-content hidden group-hover:block animate-pop-in',
          className,
        )}
        {...props}
      />
    </div>
  )
}
