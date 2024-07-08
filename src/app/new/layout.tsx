import { type ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col gap-0">
      <div className="w-full px-6 py-4 flex flex-row gap-2 border-b-2 border-base-300 bg-base-100">
        <span className="grow" />
        <button className="btn btn-sm btn-primary">Save</button>
      </div>
      <div className="grow grid grid-col-1 gap-0">
        <div className="col-span-full">{children}</div>
      </div>
    </div>
  )
}
