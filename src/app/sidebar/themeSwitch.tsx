'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/ui.provider'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <li>
      <a onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
            checked={theme === 'dark'}
          />
          <p className="swap-on">
            <Moon className="w-5 h-5" />
          </p>
          <p className="swap-off">
            <Sun className="w-5 h-5" />
          </p>
        </label>
        <p className="menu-option capitalize">{`${theme} theme`}</p>
      </a>
    </li>
  )
}
