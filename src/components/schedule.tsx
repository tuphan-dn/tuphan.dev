import { type ReactNode } from 'react'
import dayjs from 'dayjs'

import { env } from '@/configs/env'

export type ScheduleProps = {
  children: ReactNode
  published?: Date
  loading?: boolean
}

export default function Schedule({
  children,
  published,
  loading = false,
}: ScheduleProps) {
  if (loading)
    return (
      <div className="not-prose w-full flex flex-col gap-4 items-start">
        <span className="flex flex-row gap-2">
          <span className="w-8 h-4 skeleton" />
          <span className="w-12 h-4 skeleton" />
        </span>
        <span className="w-32 h-4 mb-16 skeleton" />
        <span className="w-2/3 h-12 skeleton" />

        <span className="w-full h-6 skeleton mt-6" />
        <span className="w-full h-6 skeleton" />
        <span className="w-full h-6 skeleton" />
        <span className="w-1/3 h-6 skeleton" />

        <span className="w-full h-6 skeleton mt-6" />
        <span className="w-full h-6 skeleton" />
        <span className="w-2/3 h-6 skeleton" />
      </div>
    )
  if (
    new Date(published || Date.now() + 1) > new Date() &&
    env !== 'development'
  )
    return (
      <div className="not-prose w-full flex flex-col gap-4 items-center text-base-content">
        <h1>Not Published Yet!</h1>
        <p>
          <span className="opacity-60">This article will be available in </span>
          <span>{dayjs(published).format('DD MMMM, YYYY.')}</span>
        </p>
        <img
          className="rounded-box"
          src="/meme-tat-22.jpg"
          alt="not published yet"
        />
      </div>
    )
  return <>{children}</>
}
