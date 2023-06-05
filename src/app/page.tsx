'use client'
import { Fragment, useState } from 'react'
import { useDebounce } from 'react-use'

import Sidebar from './sidebar'

export default function Home() {
  const [loading, setLoading] = useState(false)

  useDebounce(
    () => {
      if (loading) setLoading(false)
    },
    5000,
    [loading],
  )

  return (
    <Fragment>
      <main className="flex w-full">
        <Sidebar />
        <div className="flex flex-col flex-auto pr-2 py-2">
          <div className="flex-auto w-full rounded-3xl bg-slate-100 dark:bg-slate-900 bg-[url('/panel_light.jpg')] dark:bg-[url('/panel_dark.jpg')] bg-center bg-cover transition-all"></div>
        </div>
      </main>
    </Fragment>
  )
}
