'use client'
import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <article className="w-full prose prose-pre:p-0 prose-pre:rounded-box prose-pre:ring-2 prose-pre:ring-base-300 pb-32">
      {children}
    </article>
  )
}
