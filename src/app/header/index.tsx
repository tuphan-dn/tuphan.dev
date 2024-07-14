'use client'

import Link from 'next/link'
import SearchButton from './searchButton'
import PlayButton from './playButton'
import Menu from './menu'

export default function Header() {
  return (
    <div className="w-full px-6 py-3 bg-base-100 border-b-2 border-base-300 flex flex-row gap-4 items-center">
      <Link className="avatar flex" href="/">
        <div className="w-8 rounded-full">
          <img src="/icon.png" alt="Home" />
        </div>
      </Link>
      <PlayButton />
      <span className="grow" />
      <SearchButton />
      <Menu />
    </div>
  )
}
