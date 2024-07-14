'use client'
import { type MouseEvent, useCallback } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next-nprogress-bar'

import { ArrowUpRight } from 'lucide-react'
import Tags from './tags'

export function BlogCard({
  data: { title, tags, route, description, updatedAt },
}: {
  data: Tree
}) {
  const { push } = useRouter()
  const onClick = useCallback(
    (e: MouseEvent<HTMLDivElement>, route: string) => {
      e.preventDefault()
      e.stopPropagation()
      push(route, { scroll: true })
    },
    [push],
  )

  return (
    <div
      className="w-full grid grid-cols-12 gap-4 py-16 border-t border-base-300 cursor-pointer relative group"
      onClick={(e) => onClick(e, route)}
    >
      <div className="col-span-full sm:col-span-2 mt-1 flex flex-col gap-4">
        <p className="text-xs opacity-60">
          {dayjs(updatedAt).format('DD MMMM, YYYY')}
        </p>
        <Tags value={tags} />
      </div>
      <h2 className="col-span-full max-sm:mb-2 sm:col-span-4 font-semibold tracking-tight -mt-1">
        {title}
      </h2>
      <p className="col-span-full sm:col-span-6 text-sm opacity-60">
        {description}
      </p>
      <button className="btn btn-circle btn-outline btn-sm absolute bottom-4 left-0 hidden transition-all group-hover:flex">
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export function LiteBlogCard({
  data: { title, route, description },
}: {
  data: Omit<Tree, 'children'> & { children?: Tree[] }
}) {
  const { push } = useRouter()
  const onClick = useCallback(
    (e: MouseEvent<HTMLDivElement>, route: string) => {
      e.preventDefault()
      e.stopPropagation()
      push(route)
    },
    [push],
  )

  return (
    <div
      className="w-full grid grid-cols-12 gap-2 py-6 border-t border-base-300 cursor-pointer relative group"
      onClick={(e) => onClick(e, route)}
    >
      <h3 className="col-span-full font-semibold tracking-tight leading-tight">
        {title}
      </h3>
      <p className="col-span-full text-sm opacity-60">{description}</p>
    </div>
  )
}
