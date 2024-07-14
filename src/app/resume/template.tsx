'use client'
import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.article
      className="w-full my-16 prose prose-p:tracking-[-.25px]"
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.article>
  )
}
