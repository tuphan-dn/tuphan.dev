'use client'

import Empty from '@/components/empty'
import Thumbnail from './thumbnail'

import { useBlogsPaging } from '@/hooks/blogs.hook'

export type ShelfProps = {
  pageIds: string[]
  metadata: PageMap
}

export default function Shelf({ pageIds, metadata }: ShelfProps) {
  const { thumbnailIds } = useBlogsPaging(pageIds, metadata)
  return (
    <div className="grid grid-cols-12 gap-6 @container">
      {thumbnailIds.map((pageId) => (
        <div
          key={pageId}
          className="col-span-full @xl:col-span-6 @4xl:col-span-4"
        >
          <Thumbnail pageId={pageId} metadata={metadata[pageId]} />
        </div>
      ))}
      {!thumbnailIds.length && (
        <div className="col-span-full flex flex-row justify-center p-8">
          <Empty />
        </div>
      )}
    </div>
  )
}
