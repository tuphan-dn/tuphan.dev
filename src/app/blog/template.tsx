'use client'
import { type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'
import ky from 'ky'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'
import Contributors from '@/components/contributors'
import Schedule from '@/components/schedule'
import Header from './header'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const {
    data: { authors = [], tags = [], children: routes = [], date } = {},
  } = useSWR(`/api${pathname}`, async (api: string) => {
    const data = await ky.get(api).json<Blog>()
    return data
  })

  return (
    <div className="w-full flex flex-col gap-4 items-center relative">
      <div className="w-full mb-16 bg-base-100">
        <Header />
      </div>
      <article className="w-full mb-16 prose prose-h1:mt-[1.6666667em] prose-p:tracking-[-.25px] prose-table:w-full prose-table:block prose-table:overflow-auto">
        <Schedule published={date}>
          <div className="not-prose w-full flex flex-col gap-1">
            <Tags value={tags} />
            <Contributors authors={authors} date={date} />
          </div>
          {children}
        </Schedule>
      </article>
      <div
        id="question"
        className="w-full bg-base-200 border-2 border-base-300 p-4 rounded-box flex flex-col gap-1"
      >
        <p className="font-bold">You have questions?</p>
        <p>
          <span className="opacity-60">
            To ask questions, you can create issues on{' '}
          </span>
          <Link
            className="text-info-content hover:underline inline-flex"
            href="https://github.com/tuphan-dn/tuphan.dev/issues"
            target="_blank"
          >
            my GitHub.
            <ExternalLink className="w-3 h-3" />
          </Link>
        </p>
      </div>
      <div id="suggestion" className="w-full grid grid-cols-12 gap-4">
        {[...routes].reverse().map((route) => (
          <div key={route} className="col-span-full">
            <BlogCard route={route} />
          </div>
        ))}
      </div>
    </div>
  )
}
