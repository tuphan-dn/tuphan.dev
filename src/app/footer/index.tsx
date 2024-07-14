'use client'

import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import Island from '@/components/island'
import Theme from './theme'
import ToTop from './totop'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full px-6 py-4 border-t-2 border-base-300 flex flex-row gap-2 items-center">
      <p className="text-sm opacity-60">
        tuphan.dev © {new Date().getFullYear()}
      </p>
      <span className="grow" />
      <Link
        className="btn btn-xs btn-ghost btn-square"
        href="https://x.com/phan_sontu"
        target="_blank"
      >
        <SiX className="w-3 h-3" />
      </Link>
      <Link
        className="btn btn-xs btn-ghost btn-square"
        href="https://github.com/tuphan-dn"
        target="_blank"
      >
        <SiGithub className="w-3 h-3" />
      </Link>
      <span className="divider divider-horizontal m-0" />
      <Island>
        <Theme />
        <ToTop />
      </Island>
    </div>
  )
}
