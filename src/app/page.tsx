'use client'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'

import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'
import Island from '@/components/island'
import InfiniteLoading from '@/components/infiniteLoading'

import { useSignalSwitch } from '@/lib/hooks/useSignal'

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
  const reset = useSignalSwitch(tag)
  const [{ disabled, blogs }, setData] = useState<{
    disabled: boolean
    blogs: string[]
  }>({ disabled: false, blogs: [] })
  const limit = 10
  const offset = blogs.length

  const onLoad = useCallback(async () => {
    const { data } = await axios.post<string[]>('/api/blog', {
      t: tag,
      limit,
      offset,
    })
    return setData(({ blogs: [...blogs] }) => {
      data.forEach((item, i) => (blogs[offset + i] = item))
      return { disabled: data.length !== limit, blogs }
    })
  }, [limit, offset, tag])

  useEffect(() => {
    if (reset) setData({ disabled: false, blogs: [] })
  }, [reset])

  return (
    <>
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
      <div className="col-span-full flex flex-row justify-center">
        <InfiniteLoading onLoad={onLoad} disabled={disabled} />
        <p className={clsx('text-xs opacity-20', { hidden: !disabled })}>
          You reached the bottom
        </p>
      </div>
    </>
  )
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
          <Island>
            <TagList />
          </Island>
        </div>
      </div>
      <div className="w-full max-w-a4 p-6 grid grid-cols-12 gap-0">
        <Island>
          <BlogList />
        </Island>
      </div>
    </div>
  )
}
