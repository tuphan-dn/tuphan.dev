'use client'
import dayjs from 'dayjs'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Tags from './tags'

export function BlogCard({ title, tags, route, description, updatedAt }: Tree) {
  return (
    <Link
      key={title}
      className="w-full grid grid-cols-12 gap-4 py-16 border-t border-base-300 cursor-pointer relative group"
      href={route}
    >
      <div className="col-span-full sm:col-span-2 mt-1 flex flex-col gap-4">
        <p className="text-xs opacity-60">
          {dayjs(updatedAt).format('DD MMMM, YYYY')}
        </p>
        <Tags value={tags} />
      </div>
      <h2 className="col-span-full max-sm:mb-2 sm:col-span-4 font-semibold -mt-1">
        {title}
      </h2>
      <p className="col-span-full sm:col-span-6 text-sm tracking-tight opacity-60">
        {description}
      </p>
      <button className="btn btn-circle btn-outline btn-sm absolute bottom-4 left-0 hidden transition-all group-hover:flex">
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </Link>
  )
}
