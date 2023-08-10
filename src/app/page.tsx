'use client'
import { useState } from 'react'
import { useDebounce } from 'react-use'

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
    <div className="h-full flex flex-row rounded-3xl bg-slate-100 dark:bg-slate-900 bg-[url('/panel_light.jpg')] dark:bg-[url('/panel_dark.jpg')] bg-center bg-cover transition-all"></div>
  )
}
