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
      <main className="flex min-h-[calc(100vh-64px-1rem)] space-x-4 mx-4 mb-4 p-4 rounded-3xl bg-slate-100 dark:bg-slate-900 bg-[url('/panel_light.jpg')] dark:bg-[url('/panel_dark.jpg')] bg-center bg-cover transition-all"></main>
    </Fragment>
  )
}
