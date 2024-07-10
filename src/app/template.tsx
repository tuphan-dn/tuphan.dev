'use client'
import { type ReactNode } from 'react'

import Header from './header'
import Footer from './footer'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-dvh bg-base-100 flex flex-col gap-0 justify-center">
      <header className="w-full sticky top-0 z-10">
        <Header />
      </header>
      <section className="w-full grow grid grid-cols-12 gap-0">
        <div className="col-span-full">{children}</div>
      </section>
      <footer className="w-full">
        <Footer />
      </footer>
    </main>
  )
}
