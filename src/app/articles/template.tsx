'use client'
import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-pre:p-0 prose-pre:rounded-box prose-pre:border prose-pre:border-base-300">
      {children}
    </article>
  )
}
