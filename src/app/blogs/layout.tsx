import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './index.scss'

export const metadata: Metadata = {
  title: 'tuphan.dev | Blogs',
  description: 'Here is where I share my thought related to the work.',
}

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>
}
