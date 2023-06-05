import { useState } from 'react'

import Brand from 'components/brand'
import { Github, PanelLeftClose, PanelLeftOpen, Twitter } from 'lucide-react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside
      className={`${
        !open ? 'w-[60px]' : 'w-[240px]'
      } h-screen overflow-hidden transition-all`}
    >
      <ul className="menu w-[240px] rounded-box p-2 flex flex-col h-full">
        <li className="flex-auto">
          <a>
            <Brand size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/phan_sontu"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-6 w-6 fill-current" />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tuphan-dn"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-6 w-6 fill-current" />
            Github
          </a>
        </li>
        <li>
          <label
            className={`swap swap-rotate ${
              !open ? 'place-content-start' : 'place-content-end'
            }`}
          >
            <input
              type="checkbox"
              onChange={() => setOpen(!open)}
              checked={open}
            />
            <div className="swap-on">
              <PanelLeftClose className="h-6 w-6" />
            </div>
            <div className="swap-off">
              <PanelLeftOpen className="h-6 w-6" />
            </div>
          </label>
        </li>
      </ul>
    </aside>
  )
}
