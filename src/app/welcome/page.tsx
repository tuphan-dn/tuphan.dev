'use client'
import { ComponentProps, type ReactNode } from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'
import clsx from 'clsx'

const AnimatedLink = motion(Link)

function Bullet({ i = 0, children }: { i?: number; children: ReactNode }) {
  return (
    <motion.p
      className="cursor-pointer font-satoshi"
      initial={{ x: i * 8, opacity: 0 }}
      animate={{ x: 0, opacity: 0.6 }}
      transition={{ duration: 1 }}
      whileHover={{ opacity: 1 }}
    >
      {children}
    </motion.p>
  )
}

function Social({
  className,
  children,
  ...props
}: {
  className?: string
  children: ReactNode
} & ComponentProps<typeof AnimatedLink>) {
  return (
    <AnimatedLink
      className={clsx('font-satoshi text-3xl hover:underline', className)}
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </AnimatedLink>
  )
}

export default function Page() {
  return (
    <div
      className="fixed top-0 left-0 bg-base-100 z-10 w-full h-full p-8 flex flex-col gap-16"
      data-theme="dark"
    >
      <div className="grid grid-cols-4 gap-0">
        <AnimatedLink
          className="col-span-full avatar flex"
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          href="/"
        >
          <div className="w-8 rounded-full">
            <img src="/icon.png" alt="Home" />
          </div>
        </AnimatedLink>
        <motion.span
          className="col-span-full md:col-span-2 flex flex-row items-baseline gap-0"
          initial={{ x: 32, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-clash-display font-bold text-9xl tracking-wide">
            tu
          </span>
          <span className="flex-grow border-b-[1rem] border-base-content" />
        </motion.span>
        <motion.span
          className="col-span-full md:col-span-2 flex flex-row items-baseline gap-0"
          initial={{ x: 64, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-clash-display font-bold text-9xl tracking-wide">
            phan
          </span>
          <span className="flex-grow border-b-[1rem] border-base-content" />
        </motion.span>
      </div>
      <div className="flex-grow flex flex-col gap-6">
        <motion.p
          className="text-xs font-satoshi font-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          proud of
        </motion.p>
        <div className="flex-grow flex flex-col gap-2">
          <Bullet i={0}>A Blockchain Buidler.</Bullet>
          <Bullet i={1}>A Cryptography Researcher.</Bullet>
          <Bullet i={2}>
            Running{' '}
            <Link
              className="hover:underline"
              href="http://gears.bot"
              target="_blank"
            >
              gears.bot
            </Link>
            .
          </Bullet>
          <Bullet i={3}>
            Ex-Founder of{' '}
            <Link
              className="hover:underline"
              href="https://x.com/SentreProtocol"
              target="_blank"
            >
              @SentreProtocol
            </Link>{' '}
            (Acquired by{' '}
            <Link
              className="hover:underline"
              href="https://x.com/saros_xyz"
              target="_blank"
            >
              @saros_xyz
            </Link>
            ).
          </Bullet>
          <Bullet i={4}>
            Owner of{' '}
            <Link
              className="hover:underline"
              href="https://www.facebook.com/profile.php?id=61565796653633"
              target="_blank"
            >
              Mastering Blockchain in 100 Words
            </Link>
            .
          </Bullet>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0">
        <Social className="col-span-2" href="/">
          blog
        </Social>
        <Social
          className="col-span-1"
          href="https://x.com/phan_sontu"
          target="_blank"
        >
          twitter
        </Social>
        <Social
          className="col-span-1"
          href="https://github.com/tuphan-dn"
          target="_blank"
        >
          github
        </Social>
      </div>
    </div>
  )
}
