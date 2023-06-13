'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Gamepad,
  Github,
  Joystick,
  PanelLeftClose,
  PanelLeftOpen,
  Twitter,
} from 'lucide-react'
import Brand from 'components/brand'
import Island from 'components/island'
import ThemeSwitch from './themeSwitch'

import './index.scss'

const routes = [
  {
    route: '/snes',
    name: 'SNES',
    Logo: Gamepad,
  },
  {
    route: '/gba',
    name: 'GBA',
    Logo: Joystick,
  },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <aside className={`sidebar ${!open ? '' : 'open'}`}>
      <ul className="menu menu-lg rounded-box flex flex-col h-full">
        <li className="mb-8">
          <a href="/">
            <Brand
              size={24}
              named={open}
              style={{ marginLeft: -4, marginRight: -4 }}
            />
          </a>
        </li>
        {routes.map(({ route, name, Logo }) => (
          <li key={route}>
            <Link
              href={route}
              className={pathname.startsWith(route) ? 'focus' : ''}
            >
              <p>
                <Logo className="h-4 w-4" />
              </p>
              <p className="menu-option font-bold">{name}</p>
            </Link>
          </li>
        ))}
        <li className="flex-auto invisible"></li>
        <li>
          <a
            href="https://twitter.com/phan_sontu"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-4 w-4" />
            <p className="menu-option">Twitter</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tuphan-dn"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            <p className="menu-option">Github</p>
          </a>
        </li>
        <li>
          <Island>
            <ThemeSwitch />
          </Island>
        </li>
        <li>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={() => setOpen(!open)}
              checked={open}
            />
            <p className="swap-on">
              <PanelLeftClose className="h-4 w-4" />
            </p>
            <p className="swap-off">
              <PanelLeftOpen className="h-4 w-4" />
            </p>
          </label>
        </li>
      </ul>
    </aside>
  )
}
