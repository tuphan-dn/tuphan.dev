import { type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-6 flex flex-row justify-center">{children}</div>
  )
}
