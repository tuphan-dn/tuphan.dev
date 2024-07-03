'use client'
import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return <article className="w-full prose my-32">{children}</article>
}
