'use client'
import { useEffect, useRef, useState, type ComponentProps } from 'react'
import clsx from 'clsx'

import './index.scss'

export type TocProps = ComponentProps<'nav'>

export default function Toc({ className, ...props }: TocProps) {
  const [id, setId] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function scroll() {
      const [prose] = document.getElementsByClassName('prose')
      const headings = prose?.querySelectorAll('h1, h2, h3') || []
      for (const heading of Array.from(headings)) {
        const { top, bottom } = heading.getBoundingClientRect()
        if (top >= 0 && bottom <= window.innerHeight) return setId(heading.id)
      }
      for (const heading of Array.from(headings).reverse()) {
        const { bottom } = heading.getBoundingClientRect()
        if (bottom <= window.innerHeight) return setId(heading.id)
      }
    }
    scroll() // Init
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  useEffect(() => {
    if (id) {
      const actives =
        ref?.current?.querySelectorAll(`li:has(> a[href="#${id}"])`) || []
      for (const active of actives) active.classList.add('active')

      const inactives =
        ref?.current?.querySelectorAll(`li:not(:has(> a[href="#${id}"]))`) || []
      for (const inactive of inactives) inactive.classList.remove('active')
    }
  }, [id, ref])

  return (
    <div
      className="fixed top-[50%] -translate-y-[50%] right-0 cursor-pointer group z-10"
      ref={ref}
    >
      <nav
        className={clsx(
          'toc-anchor block group-hover:hidden animate-pop-in',
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
