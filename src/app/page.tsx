'use client'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'

import { BlogCard } from '@/components/blog'

export default function Page() {
  const { data } = useSWR('/api/blog', async (api: string) => {
    const { data } = await axios.get<Tree>(api)
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
          Blog
        </motion.h1>
        <motion.p
          className="opacity-60"
          initial={{ x: 32, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          I usually write about Computer Science (Web3, WebDev, Cryptography,
          and Math), and also a few MBA stuffs (cause I&apos;m learning it).
        </motion.p>
      </div>
      <div className="w-full max-w-a4 p-6 grid grid-cols-12 gap-0">
        {(data?.children || []).map((node, i) => (
          <motion.div
            key={node.title}
            className="col-span-full"
            initial={{ y: 8 * (i + 1), opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard data={node} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
