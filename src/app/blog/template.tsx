import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <article className="w-full my-32 prose prose-p:tracking-[-.25px]">
      {children}
    </article>
  )
}
