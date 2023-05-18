'use client'
import { Fragment, useState } from 'react'
import { useDebounce } from 'react-use'

import Header from './header'

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
      <Header />
      <main className="flex min-h-[calc(100vh-64px-1rem)] space-x-4 ml-4 mb-4 p-4 rounded-l-xl bg-slate-100 dark:bg-slate-900">
        <button
          className={'btn-primary btn' + (loading ? ' loading' : '')}
          onClick={() => setLoading(true)}
        >
          Nothing
        </button>
      </main>
    </Fragment>
  )
}
