'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <div className="w-full px-6 py-3 bg-base-100 border-b-2 border-base-300 flex flex-row gap-4 items-center">
      <Link className="avatar flex" href="/">
        <div className="w-8 rounded-full">
          <img src="/icon.png" alt="Home" />
        </div>
      </Link>
      <span className="grow" />
      <button className="btn btn-sm btn-circle">
        <Menu className="w-4 h-4" />
      </button>
    </div>
  )
}
