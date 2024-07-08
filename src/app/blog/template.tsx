'use client'
import { useMemo, type ReactNode } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'

import Link from 'next/link'

export default function Template({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments()

  const slugs = useMemo(
    () => [
      { name: 'blog', href: '/blog' },
      ...segments.map((segment, i, segments) => ({
        name: segment,
        href: ['/blog', ...segments.slice(0, i), segment].join('/'),
      })),
    ],
    [segments],
  )

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="-m-6 w-[calc(100%+3rem)] px-6 py-2 bg-base-100 border-b-2 border-base-300 sticky top-0 z-10">
        <div className="breadcrumbs text-sm">
          <ul>
            {slugs.map(({ name, href }) => (
              <li key={href}>
                <Link className="opacity-60 capitalize" href={href}>
                  {name.replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <article className="w-full my-32 prose prose-p:tracking-[-.25px]">
        {children}
      </article>
    </div>
  )
}
