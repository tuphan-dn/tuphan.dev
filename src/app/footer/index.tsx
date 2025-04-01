'use client'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import Link from 'next/link'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import { SquareUserRound } from 'lucide-react'
import { Dock, DockIcon } from '@/components/dock'
import Island from '@/components/island'
import Chill from './chill'
import Theme from './theme'
import Search from './search'

const BLACKLIST = ['/welcome']

function Menu({ open = true }: { open?: boolean }) {
  return (
    <Dock className={clsx({ hidden: !open })} direction="middle">
      <DockIcon>
        <Link className="btn btn-sm btn-circle btn-ghost" href="/welcome">
          <SquareUserRound className="w-4 h-4" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Search />
      </DockIcon>
      <DockIcon>
        <Chill />
      </DockIcon>
      <DockIcon className="mx-1">
        <Link className="avatar flex" href="/">
          <div className="w-8 rounded-full hover:ring-2 hover:ring-accent transition-all duration-500">
            <img src="/icon.png" alt="Home" />
          </div>
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          className="btn btn-sm btn-circle btn-ghost"
          href="https://x.com/phan_sontu"
          target="_blank"
        >
          <SiX className="w-4 h-4" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          className="btn btn-sm btn-circle btn-ghost"
          href="https://github.com/tuphan-dn"
          target="_blank"
        >
          <SiGithub className="w-4 h-4" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Theme />
      </DockIcon>
    </Dock>
  )
}

export default function Footer() {
  const pathname = usePathname()
  return (
    <Island>
      <Menu open={!BLACKLIST.find((e) => pathname.startsWith(e))} />
    </Island>
  )
}
