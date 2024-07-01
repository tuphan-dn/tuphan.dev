import { type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-dvh flex flex-col gap-0 bg-base-100">
      <section className="w-full grow grid grid-cols-12 gap-0">
        <div className="col-span-full">{children}</div>
      </section>
    </main>
  )
}
