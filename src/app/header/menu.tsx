'use client'
import { motion } from 'framer-motion'

import Link from 'next/link'
import {
  ArrowUpRight,
  Clipboard,
  HandMetal,
  Mail,
  MenuIcon,
  Rss,
} from 'lucide-react'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Menu() {
  return (
    <Popover>
      <PopoverButton className="btn btn-sm btn-circle">
        <MenuIcon className="w-4 h-4" />
      </PopoverButton>
      <PopoverPanel
        anchor={{ gap: 5 }}
        className="z-10 flex flex-col p-2 border-2 border-base-300 bg-base-100 rounded-box w-60 shadow-lg animate-pop-in"
      >
        {/* Menu */}
        <motion.span
          className="text-xs font-light opacity-60 mx-3 mb-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          MENU
        </motion.span>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal"
          href="/welcome"
        >
          <HandMetal className="w-4 h-4" />
          Welcome
        </Link>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal"
          href="/"
        >
          <Rss className="w-4 h-4" />
          Blog
        </Link>
        {/* About */}
        <motion.span
          className="text-xs font-light opacity-60 mx-3 mb-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          ABOUT ME
        </motion.span>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal group"
          href="https://x.com/phan_sontu"
          target="_blank"
        >
          <SiX className="w-4 h-4" />
          <span className="grow text-left">
            X <span className="opacity-60 font-light">(formerly Twitter)</span>
          </span>
          <ArrowUpRight className="w-4 h-4 hidden group-hover:flex animate-pop-in" />
        </Link>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal group"
          href="https://github.com/tuphan-dn"
          target="_blank"
        >
          <SiGithub className="w-4 h-4" />
          <span className="grow text-left">GitHub</span>
          <ArrowUpRight className="w-4 h-4 hidden group-hover:flex animate-pop-in" />
        </Link>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal"
          href="/static/Curriculum_Vitae.pdf"
          target="_blank"
        >
          <Clipboard className="w-4 h-4" />
          Resumé
        </Link>
        {/* Contacts */}
        <motion.span
          className="text-xs font-light opacity-60 mx-3 mb-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          CONTACTS
        </motion.span>
        <Link
          className="btn btn-ghost btn-sm flex flex-row gap-4 justify-start items-center font-normal group"
          href="mailto:tuphan@gears.bot"
          target="_blank"
        >
          <Mail className="w-4 h-4" />
          <span className="grow text-left">dm for business</span>
          <ArrowUpRight className="w-4 h-4 hidden group-hover:flex animate-pop-in" />
        </Link>
      </PopoverPanel>
    </Popover>
  )
}
