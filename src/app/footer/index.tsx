'use client'

import { SiX } from '@icons-pack/react-simple-icons'
import Island from '@/components/island'
import Theme from './theme'
import ToTop from './totop'

export default function Footer() {
  return (
    <div className="w-full px-6 py-4 border-t-2 border-base-300 flex flex-row gap-2 items-center">
      <p className="text-sm opacity-60">
        tuphan.dev © {new Date().getFullYear()}
      </p>
      <span className="grow" />
      <button className="btn btn-xs btn-ghost btn-square">
        <SiX className="w-3 h-3" />
      </button>
      <span className="divider divider-horizontal m-0" />
      <Island>
        <Theme />
        <ToTop />
      </Island>
    </div>
  )
}
