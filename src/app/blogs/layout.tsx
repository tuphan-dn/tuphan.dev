import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './index.scss'

export const metadata: Metadata = {
  title: 'tuphan.dev | Blogs',
  description: 'Here is where I share my thought related to the work.',
}

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-row justify-center rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 dark:from-purple-900 dark:via-pink-900 dark:to-amber-900 transition-all p-4">
      <div className="w-full max-w-[1240px]">{children}</div>
    </div>
  )
}
