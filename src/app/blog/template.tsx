import { type ReactNode } from 'react'
import { headers } from 'next/headers'
import ky from 'ky'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { BlogCard } from '@/components/blog'
import Tags from '@/components/tags'
import Contributors from '@/components/contributors'
import Schedule from '@/components/schedule'
import Header from './header'

export default async function Template({ children }: { children: ReactNode }) {
  const pathname = headers().get('x-forwarded-pathname') || ''
  const {
    authors = [],
    tags = [],
    children: routes = [],
    date,
  } = await ky
    .get(`${process.env.NEXT_PUBLIC_HOST}/api${pathname}`)
    .json<Blog>()

  return (
    <div className="w-full flex flex-col gap-4 items-center relative">
      <div className="sticky top-0 w-full mb-16 bg-base-100 z-10">
        <Header />
      </div>
      <article className="w-full z-0 mb-16 prose prose-p:tracking-[-.25px] prose-table:w-full prose-table:block prose-table:overflow-auto">
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
        className="w-full z-0 bg-base-200 border-2 border-base-300 p-4 rounded-box flex flex-col gap-1"
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
      <div id="suggestion" className="w-full z-0 grid grid-cols-12 gap-4">
        {[...routes].reverse().map((route) => (
          <div key={route} className="col-span-full">
            <BlogCard route={route} />
          </div>
        ))}
      </div>
    </div>
  )
}
