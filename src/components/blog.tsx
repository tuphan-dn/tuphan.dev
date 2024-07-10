'use client'
import dayjs from 'dayjs'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function BlogCard({ title, route, description, updatedAt }: Tree) {
  return (
    <Link
      key={title}
      className="w-full grid grid-cols-12 gap-4 py-16 border-t border-base-300 cursor-pointer relative group"
      href={route}
    >
      <span className="col-span-full sm:col-span-2 text-xs opacity-60 mt-1">
        {dayjs(updatedAt).format('DD MMMM, YYYY')}
      </span>
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
