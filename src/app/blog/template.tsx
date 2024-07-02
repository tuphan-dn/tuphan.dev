'use client'
import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-pre:p-0 prose-pre:rounded-box prose-pre:ring-2 prose-pre:ring-base-300">
      {children}
    </article>
  )
}
