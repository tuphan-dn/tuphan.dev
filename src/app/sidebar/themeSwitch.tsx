'use client'

import { Moon, Sun } from 'lucide-react'

import './index.scss'
import { useTheme } from 'providers/ui.provider'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
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
  )
}
