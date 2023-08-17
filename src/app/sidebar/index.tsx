'use client'
import { Fragment, ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useKey } from 'react-use'
import classNames from 'classnames'

import {
  Github,
  Menu,
  Paintbrush,
  PanelLeftClose,
  PanelLeftOpen,
  Scroll,
  Twitter,
} from 'lucide-react'
import Brand from '@/components/brand'
import Island from '@/components/island'
import ThemeSwitch from './themeSwitch'
import BuildInfo from './buildInfo'

import './index.scss'

const routes = [
  {
    route: '/blogs',
    name: 'Blogs',
    Logo: Scroll,
  },
  {
    route: '/pixel',
    name: 'Pixel',
    Logo: Paintbrush,
  },
]

function MenuLoading() {
  return (
    <li>
      <a href="#">
        <span className="menu-logo loading loading-ring loading-xs" />
      </a>
    </li>
  )
}

export type SidebarProps = { children: ReactNode }

export default function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useKey(
    (e) => e.metaKey && e.key === 'k',
    () => setOpen(!open),
  )

  return (
    <Fragment>
      {/* Overlay */}
      <div
        className={classNames('overlay max-md:mobile', { open })}
        onClick={() => setOpen(false)}
      />
      {/* Sidebar */}
      <aside className={classNames('sidebar vertical max-md:mobile', { open })}>
        <ul className="h-full menu menu-vertical menu-md">
          <li className="mb-8">
            <a href="/">
              <Brand
                size={24}
                style={{ marginLeft: -2, marginRight: -2 }}
                named={open}
              />
            </a>
          </li>
          {routes.map(({ route, name, Logo }) => (
            <li key={route}>
              <Link
                href={route}
                className={classNames({ focus: pathname.startsWith(route) })}
              >
                <p>
                  <Logo className="menu-logo" />
                </p>
                <p className="menu-option font-semibold">{name}</p>
              </Link>
            </li>
          ))}
          <div className="flex-auto" />
          <div className="divider mx-4 my-0" />
          <li>
            <a
              href="https://github.com/tuphan-dn"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="menu-logo" />
              <p className="menu-option">Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/phan_sontu"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="menu-logo" />
              <p className="menu-option">Twitter</p>
            </a>
          </li>
          <Island Loading={MenuLoading}>
            <ThemeSwitch />
          </Island>
          <Island Loading={MenuLoading}>
            <BuildInfo />
          </Island>
          <li onClick={() => setOpen(!open)}>
            <span className="flex flex-row gap-1 items-center justify-between">
              <div className="menu-option pl-6 gap-1">
                <span className="join opacity-60">
                  <kbd className="join-item kbd !kbd-xs">ctrl</kbd>
                  <kbd className="join-item kbd !kbd-xs">⌘</kbd>
                </span>
                <span>+</span>
                <kbd className="kbd !kbd-xs opacity-60">K</kbd>
              </div>
              <label className="menu-logo swap swap-rotate">
                <input
                  type="checkbox"
                  onClick={(e) => e.stopPropagation()}
                  checked={open}
                  readOnly
                />
                <p className="swap-on">
                  <PanelLeftClose className="menu-logo" />
                </p>
                <p className="swap-off">
                  <PanelLeftOpen className="menu-logo" />
                </p>
              </label>
            </span>
          </li>
        </ul>
      </aside>
      {/* Mobile header & Page content */}
      <main className="flex-auto flex flex-col min-h-[100dvh]">
        <header className="sidebar horizontal pl-3 py-2 md:hidden">
          <ul className="w-full menu menu-horizontal menu-md flex flex-row items-center">
            <a href="/">
              <Brand size={24} named />
            </a>
            <div className="flex-auto" />
            <Island Loading={MenuLoading}>
              <ThemeSwitch />
            </Island>
            <li>
              <a onClick={() => setOpen(true)} href="#">
                <Menu className="menu-logo" />
              </a>
            </li>
          </ul>
        </header>
        <section className="flex-auto max-md:px-2 max-md:pb-2 md:pr-2 md:py-2">
          {children}
        </section>
      </main>
    </Fragment>
  )
}
