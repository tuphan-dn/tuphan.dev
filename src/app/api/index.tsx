'use client'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useIntersection, useInterval } from 'react-use'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Signature from '../blogs/banner/signature'
import Lite from '../blogs/banner/lite'

import { useBlogsPaging } from '@/hooks/blogs.hook'

const SECONDS = 10 // in seconds
const INTERVAL = (SECONDS * 1000) / 100

export type BannerProps = {
  pageIds: string[]
  metadata: PageMap
}

export default function Shelf({ pageIds, metadata }: BannerProps) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const { pinnedIds } = useBlogsPaging(pageIds, metadata)
  const {
    boundingClientRect: { top, height },
  } = useIntersection(ref, {}) || { boundingClientRect: { top: 0, height: 0 } }

  const { bannerId, otherIds } = useMemo(() => {
    const len = pinnedIds.length
    const pos = ((index % len) + len) % len
    const bannerId = pinnedIds[pos]
    const otherIds = pinnedIds.filter((pageId) => pageId !== bannerId)
    return { bannerId, otherIds }
  }, [pinnedIds, index])

  const visible = top + height > 0

  useInterval(
    () => {
      if (count >= 100) onNext()
      else setCount(count + 1)
    },
    visible ? INTERVAL : null,
  )

  const onBack = useCallback(() => {
    setIndex(index - 1)
    setCount(0)
  }, [index])

  const onNext = useCallback(() => {
    setIndex(index + 1)
    setCount(0)
  }, [index])

  return (
    <div className="grid grid-cols-12 gap-6 @container">
      {bannerId && (
        <div className="col-span-full flex flex-row items-center relative">
          <span
            className="absolute -bottom-1 bg-accent rounded-box h-full transition-all"
            style={{ width: `${count}%` }}
            ref={ref}
          />
          <Signature pageId={bannerId} metadata={metadata[bannerId]} />
          <button
            className="btn btn-circle absolute left-4 shadow-xl"
            onClick={onBack}
          >
            <ArrowLeft />
          </button>
          <button
            className="btn btn-circle absolute right-4 shadow-xl"
            onClick={onNext}
          >
            <ArrowRight />
          </button>
        </div>
      )}
      {otherIds.map((pageId) => (
        <div
          key={pageId}
          className="col-span-full @lg:col-span-6 @2xl:col-span-4 @4xl:col-span-3"
        >
          <Lite pageId={pageId} metadata={metadata[pageId]} />
        </div>
      ))}
    </div>
  )
}
