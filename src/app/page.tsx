'use client'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'

export default function Page() {
  const params = useSearchParams()
  const tag = params.get('tag') || ''
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
  const { data: tags = [] } = useSWR('/api/tag', async (api: string) => {
    const { data } = await axios.get<string[]>(api)
    return data
  })

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
          I usually write about Computer Science (Web3, WebDev, Cryptography,
          and Math), and also some MBA stuffs (because I&apos;m learning it).
        </motion.p>
        <div className="w-full">
          <Tags value={tags} active={tag} all />
        </div>
      </div>
      <div className="w-full max-w-a4 p-6 grid grid-cols-12 gap-0">
        {blogs.map((route, i) => (
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
