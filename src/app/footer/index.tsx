'use client'

import Island from '@/components/island'
import Theme from './theme'

export default function Footer() {
  return (
    <div className="w-full px-6 py-4 border-t-2 border-base-300 flex flex-row gap-2 items-center">
      <p className="text-sm opacity-60">blogy.me © 2024</p>
      <span className="grow" />
      <Island>
        <Theme />
      </Island>
    </div>
  )
}
