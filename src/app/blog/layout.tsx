import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { table } from '@/db'

export async function generateMetadata(): Promise<Metadata> {
  const pathname = headers().get('x-forwarded-pathname') || ''
  const { title, description } =
    table.find(({ route }) => route === pathname) || {}
  return {
    title,
    description,
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-6 flex flex-row justify-center">{children}</div>
  )
}
