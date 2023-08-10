'use client'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Sparkle } from 'lucide-react'

export type LiteProps = {
  pageId: string
  metadata: PageMetadata
}

export default function Lite({
  pageId,
  metadata: { publishedAt, tags, title },
}: LiteProps) {
  return (
    <Link
      className="card card-side h-full bg-base-100 rounded-box shadow"
      href={`/blogs/${pageId}`}
    >
      <div className="w-full flex flex-col gap-4 p-6">
        <div className="flex flex-row gap-2 items-center">
          <p className="flex-auto text-sm opacity-60">
            {dayjs(publishedAt).format('MMM DD, YYYY')}
          </p>
          <Sparkle className="w-5 h-5 fill-accent text-accent" />
        </div>
        <p className="flex-auto font-bold">{title}</p>
        <div className="flex flex-row flex-wrap gap-2 items-center">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
