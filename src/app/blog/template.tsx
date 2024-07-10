'use client'
import { useMemo, type ReactNode } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import useSWR from 'swr'
import axios from 'axios'
import { motion } from 'framer-motion'

import Link from 'next/link'
import { BlogCard } from '@/components/blog'

export default function Template({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments()
  const { data } = useSWR(
    `/api/blog/${segments.join('/')}`,
    async (api: string) => {
      const { data } = await axios.get<Tree>(api)
      return data
    },
  )

  const slugs = useMemo(
    () => [
      { name: 'blog', href: '/' },
      ...segments.map((segment, i, segments) => ({
        name: segment,
        href: ['/blog', ...segments.slice(0, i), segment].join('/'),
      })),
    ],
    [segments],
  )

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <motion.article
        className="w-full my-16 prose prose-p:tracking-[-.25px]"
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sticky top-3 not-prose mb-8 pb-4 border-b border-base-300 breadcrumbs text-sm">
          <ul>
            {slugs.map(({ name, href }, i) => (
              <motion.li
                key={href}
                initial={{ x: 16 * (i + 1), opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link className="opacity-60 capitalize" href={href}>
                  {name.replace('-', ' ')}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        {children}
      </motion.article>
      <div className="w-full max-w-[65ch] grid grid-cols-12 gap-4">
        {(data?.children || []).map((node, i) => (
          <motion.div
            key={node.title}
            className="col-span-full"
            initial={{ y: 8 * (i + 1), opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard {...node} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
