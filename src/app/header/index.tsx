'use client'

import { Moon, Sun1 } from 'iconsax-react'
import Brand from 'components/brand'

import { useTheme } from 'providers/ui.provider'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 rounded-b-sm bg-gray-100 dark:bg-gray-900">
      <nav className="flex items-center space-x-2 p-4">
        <div className="flex-auto ">
          <Brand onClick={() => window.location.reload()} />
        </div>
        <div className="flex items-center">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div className="swap-on">
              <Moon variant="Bold" />
            </div>
            <div className="swap-off">
              <Sun1 variant="Bold" />
            </div>
          </label>
        </div>
      </nav>
    </header>
  )
}
