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
    <div className="flex-auto w-full rounded-3xl bg-light-home dark:bg-dark-home bg-center bg-cover transition-all"></div>
  )
}
