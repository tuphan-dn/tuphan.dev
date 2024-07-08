'use client'

import Theme from './theme'

export default function Footer() {
  return (
    <div className="w-full px-6 py-4 bg-base-200 border-t-2 border-base-300 flex flex-row gap-2 items-center">
      <p className="text-sm opacity-60">blogy.me © 2024</p>
      <span className="grow" />
      <Theme />
    </div>
  )
}
