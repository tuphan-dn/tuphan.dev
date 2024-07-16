'use client'
import { useMemo, type ReactNode } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import useSWR from 'swr'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'

import Link from 'next/link'
import { Play } from 'lucide-react'
import { SiFacebook, SiX } from '@icons-pack/react-simple-icons'
import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'
import Share from './share'

const MotionShare = motion(Share)

export default function Template({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments()
  const { data: { tags = [], children: routes = [] } = {} } = useSWR(
    `/api/blog/${segments.join('/')}`,
    async (api: string) => {
      const { data } = await axios.get<Blog>(api)
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
        <div className="not-prose mb-16 flex flex-col gap-0">
          <div className="breadcrumbs text-sm">
            <ul>
              <AnimatePresence>
                {slugs.map(({ name, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ x: 16 * (i + 1), opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 16 * (i + 1), opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link className="opacity-60 capitalize" href={href}>
                      {name.replace('-', ' ')}
                    </Link>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
          <div className="w-full flex flex-row gap-2 justify-end py-3 border-y border-base-300">
            <MotionShare
              url="https://www.facebook.com/sharer/sharer.php"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SiFacebook className="h-4 w-4" />
            </MotionShare>
            <motion.button
              className="btn btn-circle btn-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SiX className="h-4 w-4" />
            </motion.button>
            <span className="grow" />
            <motion.button
              className="btn btn-sm rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Play className="w-4 h-4 fill-base-content" />
              Listen to Article
            </motion.button>
          </div>
        </div>
        <div className="not-prose w-full">
          <Tags value={tags} />
        </div>
        {children}
      </motion.article>
      <div className="w-full max-w-[65ch] grid grid-cols-12 gap-4">
        {[...routes].reverse().map((route, i) => (
          <motion.div
            key={route}
            className="col-span-full"
            initial={{ y: 8 * (i + 1), opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard route={route} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
