'use client'

import { Moon, Sun, Twitter, Github } from 'lucide-react'
import Brand from 'components/brand'

import { useTheme } from 'providers/ui.provider'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 backdrop-blur">
      <nav className="flex items-center space-x-2 p-4">
        <div className="flex-auto">
          <Brand onClick={() => window.location.reload()} />
        </div>
        <div>
          <a
            className="btn btn-xs btn-ghost gap-2"
            href="https://twitter.com/phan_sontu"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-3 w-3" />
            Twitter
          </a>
        </div>
        <div>
          <a
            className="btn btn-xs btn-ghost gap-2"
            href="https://github.com/tuphan-dn"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-3 w-3" />
            Github
          </a>
        </div>
        <div className="flex items-center !ml-3">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div className="swap-on">
              <Moon />
            </div>
            <div className="swap-off">
              <Sun />
            </div>
          </label>
        </div>
      </nav>
    </header>
  )
}
