'use client'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { useDebounce } from 'react-use'
import dayjs from 'dayjs'

import { ChevronDown, Search } from 'lucide-react'
import Empty from '@/components/empty'
import Modal from '@/components/modal'

import { LIMIT, TAGS, useBlogsPaging } from '@/hooks/blogs.hook'

export type BlogsNavigationProps = {
  pageIds: string[]
  metadata: PageMap
}

export default function BlogsNavigation({
  pageIds,
  metadata,
}: BlogsNavigationProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [limit, setLimit] = useState(LIMIT)
  const [results, setResults] = useState<Array<PageMetadata & { id: string }>>(
    [],
  )
  const ref = useRef<HTMLInputElement>(null)
  const { tag: activeTag } = useBlogsPaging(pageIds, metadata)

  const engine = useMemo(() => {
    const data = Object.keys(metadata).map((id) => ({ id, ...metadata[id] }))
    const fuse = new Fuse<PageMetadata & { id: string }>(data, {
      includeScore: true,
      keys: ['title', 'description'],
    })
    return fuse
  }, [metadata])

  const onKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    setLimit(LIMIT)
    setLoading(true)
  }, [])

  const onClose = useCallback(() => {
    setOpen(false)
    setKeyword('')
  }, [])

  useDebounce(
    () => {
      try {
        const re = engine.search(keyword)
        if (!keyword || keyword.length < 3) setResults([])
        else setResults(re.map(({ item }) => item))
      } catch (er) {
        setResults([])
      } finally {
        setLoading(false)
      }
    },
    500,
    [keyword],
  )

  useEffect(() => {
    if (open && ref.current) ref.current.focus()
  }, [open])

  return (
    <div className="flex flex-row items-center">
      <div className="flex-auto flex flex-row gap-2 overflow-auto no-scrollbar">
        {TAGS.map(({ title, tag }) => (
          <Link
            key={tag}
            className={
              'btn rounded-full ' +
              (tag === activeTag ? 'btn-neutral' : 'btn-ghost')
            }
            href={{
              pathname: '/blogs',
              query: !tag ? { page: 1 } : { tag, page: 1 },
            }}
          >
            {title}
          </Link>
        ))}
      </div>
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => setOpen(true)}
      >
        <Search />
      </button>
      <Modal open={open} onCancel={onClose}>
        <div className="grid grid-cols-12 gap-2">
          <h5 className="col-span-full">Search</h5>
          <div className="col-span-full flex flex-row items-center relative">
            <input
              type="text"
              name="search"
              placeholder="Type something to search"
              className="w-full input bg-base-200 rounded-full pr-8"
              value={keyword}
              onChange={onKeyword}
              ref={ref}
            />
            {loading ? (
              <div className="loading loading-spinner loading-xs absolute right-3" />
            ) : (
              <Search className="pointer-events-none w-4 h-4 absolute right-3" />
            )}
          </div>
          <div className="col-span-full grid grid-cols-12 gap-2 max-h-[75dvh] overflow-y-auto no-scrollbar">
            {!results.length && (
              <div className="col-span-full flex flex-row justify-center p-4">
                <Empty />
              </div>
            )}
            {results
              .slice(0, limit)
              .map(({ id, title, description, publishedAt }) => (
                <Link
                  key={id}
                  className="col-span-full bg-base-200 rounded-xl p-4"
                  href={`/blogs/${id}`}
                >
                  <p className="font-bold">{title}</p>
                  <p className="opacity-60 text-sm">{description}</p>
                  <p className="w-full text-end opacity-60 text-xs">
                    {dayjs(publishedAt).format('MMM DD, YYYY')}
                  </p>
                </Link>
              ))}
            {!!results.length && (
              <div className="col-span-full flex flex-row gap-2 justify-center">
                <button
                  className="btn btn-xs btn-ghost"
                  onClick={() => setLimit(limit + LIMIT)}
                  disabled={results.length <= limit}
                >
                  <ChevronDown className="w-3 h-3" /> More
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
