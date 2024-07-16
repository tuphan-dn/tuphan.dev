'use client'
import { type ReactNode, useMemo } from 'react'

import Link from 'next/link'

export default function Share({
  url = '#',
  children,
}: {
  url?: string
  hashtag?: string
  children: ReactNode
}) {
  const href = useMemo(() => {
    const params = new URLSearchParams({ u: location.href }).toString()
    return `${url}?${params}`
  }, [url])

  return (
    <Link className="btn btn-circle btn-sm" href={href} target="_blank">
      {children}
    </Link>
  )
}
