'use client'
import { Fragment, useEffect, useState } from 'react'
import useKeyboardJs from 'react-use/lib/useKeyboardJs'

import { Search } from 'lucide-react'
import Modal from '@/components/ui/modal'
import Island from '@/components/island'

import { isMac } from '@/lib/utils'

function Kbd() {
  return (
    <span className="join opacity-40">
      <kbd className="kbd kbd-xs join-item -ml-[0.375rem]">
        {isMac() ? '⌘' : 'ctrl'}
      </kbd>
      <kbd className="kbd kbd-xs join-item">k</kbd>
    </span>
  )
}

export default function SearchButton() {
  const [open, setOpen] = useState(false)
  const [, e] = useKeyboardJs(isMac() ? 'command + k' : 'ctrl + k')

  useEffect(() => {
    if (e) setOpen(true)
  }, [e])

  return (
    <Fragment>
      <button className="btn btn-sm rounded-full" onClick={() => setOpen(true)}>
        <Island>
          <Kbd />
        </Island>
        <Search className="w-3 h-3 ml-1" />
      </button>
      <Modal open={open} onCancel={() => setOpen(false)} closable={false}>
        <div className="grid grid-cols-12 gap-4">
          <label className="col-span-full -m-6 mb-0 input input-lg bg-base-200 !border-none !outline-none flex items-center gap-4">
            <Search className="w-4 h-4" />
            <input
              type="text"
              className="grow text-sm"
              placeholder="Type here to search..."
              data-autofocus
            />
            <kbd className="kbd kbd-sm">Esc</kbd>
          </label>
          <div className="col-span-full">
            <p>Some text</p>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}
