'use client'
import { useState } from 'react'
import Link from 'next/link'

import Brand from 'components/brand'
import {
  Gamepad,
  Github,
  Joystick,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Twitter,
} from 'lucide-react'

import './index.scss'
import { useTheme } from 'providers/ui.provider'

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
  const { theme, setTheme } = useTheme()

  return (
    <aside className={`sidebar ${!open ? '' : 'open'}`}>
      <ul className="menu menu-lg rounded-box flex flex-col h-full">
        <li>
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
            <Link href={route}>
              <p>
                <Logo className="h-4 w-4" />
              </p>
              <p className="menu-option">{name}</p>
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
          <span onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
                checked={theme === 'dark'}
              />
              <p className="swap-on">
                <Moon className="w-4 h-4" />
              </p>
              <p className="swap-off">
                <Sun className="w-4 h-4" />
              </p>
            </label>
            <p className="menu-option capitalize">{`${theme} theme`}</p>
          </span>
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
