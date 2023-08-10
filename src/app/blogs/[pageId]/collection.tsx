'use client'
import { Block, ExtendedRecordMap } from 'notion-types'
import dayjs from 'dayjs'
import { getPageProperty } from 'notion-utils'

import { Calendar, Tag } from 'lucide-react'

export type PageCollectionProps = {
  block: Block
  map: ExtendedRecordMap
}

export default function PageCollection({ block, map }: PageCollectionProps) {
  const publishedAt = getPageProperty<number>('Date', block, map) || Date.now()
  const tags = getPageProperty<string[]>('Tags', block, map) || []

  return (
    <div className="grid grid-cols-12 gap-2 w-full">
      <div className="col-span-full flex flex-row gap-2 items-center">
        <Calendar className="w-4 h-4 opacity-60" />
        <p>{dayjs(publishedAt).format('MMMM DD, YYYY')}</p>
      </div>
      <div className="col-span-full flex flex-row flex-wrap gap-2 items-center">
        <Tag className="w-4 h-4 opacity-60" />
        {tags.map((tag) => (
          <div key={tag} className="badge badge-outline">
            {tag}
          </div>
        ))}
      </div>
      <span className="col-span-full divider divider-vertical" />
    </div>
  )
}
