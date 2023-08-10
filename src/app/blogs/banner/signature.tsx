'use client'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Sparkle } from 'lucide-react'

export type SignatureProps = {
  pageId: string
  metadata: PageMetadata
}

export default function Signature({
  pageId,
  metadata: { publishedAt, tags, title, description, thumbnail },
}: SignatureProps) {
  return (
    <Link
      className="card card-side h-full w-full bg-base-100 rounded-box shadow grid grid-cols-12 gap-4 overflow-clip @container"
      href={`/blogs/${pageId}`}
    >
      <figure className="col-span-full @2xl:col-span-6">
        <img
          className="h-full w-full object-cover"
          src={thumbnail}
          alt={pageId}
        />
      </figure>
      <div className="col-span-full @2xl:col-span-6 flex flex-col gap-4 p-8">
        <div className="flex flex-row gap-2 items-center">
          <p className="flex-auto text-sm opacity-60">
            {dayjs(publishedAt).format('MMM DD, YYYY')}
          </p>
          <Sparkle className="w-5 h-5 fill-accent text-accent" />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="opacity-60 flex-auto">{description}</p>
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
