'use client'
import Link from 'next/link'
import dayjs from 'dayjs'

export type ThumbnailProps = {
  pageId: string
  metadata: PageMetadata
}

export default function Thumbnail({
  pageId,
  metadata: { publishedAt, tags, title, description, thumbnail },
}: ThumbnailProps) {
  return (
    <Link
      className="card h-full bg-base-100 rounded-box"
      href={`/blogs/${pageId}`}
    >
      <figure>
        <img src={thumbnail} alt={pageId} />
      </figure>
      <div className="card-body">
        <p className="text-sm opacity-60">
          {dayjs(publishedAt).format('MMM DD, YYYY')}
        </p>
        <h2 className="card-title">{title}</h2>
        <p className="opacity-60 pb-4">{description}</p>
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
