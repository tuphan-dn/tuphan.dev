'use client'
import { useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <header className="bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div>
          <p className="dark:to-white">Header</p>
        </div>
        <div>
          <input
            type="checkbox"
            className="toggle"
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
        </div>
      </nav>
    </header>
  )
}
