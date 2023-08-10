import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './index.scss'

export const metadata: Metadata = {
  title: 'tuphan.dev Blogs',
  description:
    "I'm a cryptographer and working on blockchain technology currently. Here is where I share my thought related to the work.",
}

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid grid-cols-12 gap-2">
      <div className="col-span-full">{children}</div>
    </div>
  )
}
