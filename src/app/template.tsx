'use client'
import { type ReactNode } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function Template({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments()

  console.log(segments)
  return (
    <main className="w-full min-h-dvh flex flex-col gap-0 bg-base-100">
      <section className="w-full grow grid grid-cols-12 gap-0">
        <div className="col-span-full">{children}</div>
      </section>
    </main>
  )
}
