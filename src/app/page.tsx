'use client'
import { Suspense } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'

function useTag() {
  const params = useSearchParams()
  const tag = params.get('tag') || ''
  return tag
}

function TagList() {
  const tag = useTag()
  const { data: tags = [] } = useSWR('/api/tag', async (api: string) => {
    const { data } = await axios.get<string[]>(api)
    return data
  })
  return (
    <Tags className="flex flex-row flex-wrap gap-2" value={tags} active={tag} />
  )
}

function BlogList() {
  const tag = useTag()
  const { data: blogs = [] } = useSWR(
    [tag ? '/api/tag' : '/api/blog', tag],
    async ([api, tag]: [string, string]) => {
      if (!tag) {
        const { data: { children = [] } = {} } = await axios.get<Blog>(api)
        return children
      }
      const { data } = await axios.post<string[]>(api, { tag })
      return data
    },
  )
  return blogs.map((route, i) => (
    <motion.div
      key={route}
      className="col-span-full"
      initial={{ y: 8 * (i + 1), opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BlogCard route={route} />
    </motion.div>
  ))
}

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full max-w-a4 flex flex-col gap-6 p-6 my-16">
        <motion.h1
          initial={{ x: 16, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          blog
        </motion.h1>
        <motion.p
          className="opacity-60"
          initial={{ x: 32, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          I usually write about Computer Science like Web3, WebDev,
          Cryptography, and Math, also some MBA stuffs cause I&apos;m learning
          it.
        </motion.p>
        <div className="w-full">
          <Suspense>
            <TagList />
          </Suspense>
        </div>
      </div>
      <div className="w-full max-w-a4 p-6 grid grid-cols-12 gap-0">
        <Suspense>
          <BlogList />
        </Suspense>
      </div>
    </div>
  )
}
