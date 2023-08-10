'use client'
import { useRouter } from 'next/navigation'
import { ExtendedRecordMap, PageBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { ArrowLeft } from 'lucide-react'

export type PageHeaderProps = {
  block: PageBlock
  map: ExtendedRecordMap
}

export default function PageHeader({ block, map }: PageHeaderProps) {
  const { back } = useRouter()
  const title = getBlockTitle(block, map)

  return (
    <div className="flex flex-row gap-8 p-2 items-center">
      <button className="btn btn-sm btn-ghost rounded-full" onClick={back}>
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <p className="text-sm font-bold flex-auto text-end truncate opacity-60">
        {title}
      </p>
    </div>
  )
}
