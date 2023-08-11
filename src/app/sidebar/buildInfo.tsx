'use client'
import axios from 'axios'
import useSWR from 'swr'

import { CalendarClock } from 'lucide-react'
import dayjs from 'dayjs'

export default function BuildInfo() {
  const { data } = useSWR('build-info', async () => {
    const {
      data: { timestamp },
    } = await axios.get<{ timestamp: number }>('/api/status/last-build')
    return timestamp
  })

  return (
    <li>
      <a
        href="https://github.com/tuphan-dn/tuphan.dev/actions"
        target="_blank"
        rel="noreferrer"
      >
        <CalendarClock className="menu-logo" />
        <p className="menu-option opacity-60">
          Ver: {dayjs(data).format('DD MMM HH:mm')}
        </p>
      </a>
    </li>
  )
}
