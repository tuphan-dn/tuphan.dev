'use client'
import { useEffect } from 'react'
import { PageBlock } from 'notion-types'
import { useRouter } from 'next/navigation'

import { NotionRenderer } from 'react-notion-x'
import { Tweet } from 'react-tweet'
import { Equation } from './equation'
import { Code } from './code'
import Skeleton from './skeleton'
import PageHeader from './header'
import PageCollection from './collection'
import PageFooter from './footer'

import { usePushMessage } from '@/components/message/store'
import { useTheme } from '@/providers/ui.provider'
import { useBlogsPage } from '@/hooks/blogs.hook'

export default function Page({
  params: { pageId },
}: {
  params: { pageId: string }
}) {
  const { push } = useRouter()
  const { theme } = useTheme()
  const pushMessage = usePushMessage()
  const {
    data: { map, recommends },
    error,
  } = useBlogsPage(pageId)

  useEffect(() => {
    if (error) {
      pushMessage('alert-error', error.message)
      push('/blogs')
    }
  }, [error, pushMessage, push])

  if (!map || !recommends) return <Skeleton />
  return (
    <NotionRenderer
      recordMap={map}
      fullPage={true}
      darkMode={theme === 'dark'}
      className="col-span-full overflow-clip rounded-3xl border border-base-200"
      components={{
        Header: ({ block }: { block: PageBlock }) => (
          <PageHeader block={block} map={map} />
        ),
        Collection: ({ block }: { block: PageBlock }) => (
          <PageCollection block={block} map={map} />
        ),
        Tweet,
        Code,
        Equation,
      }}
      footer={<PageFooter pageIds={recommends} />}
    />
  )
}
