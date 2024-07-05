import { useMemo } from 'react'
import dayjs from 'dayjs'

export type ContributorsProps = {
  value: string
}

export default function Contributors({ value }: ContributorsProps) {
  const authors: Array<{ name: string; email: string; timestamp: number }> =
    useMemo(() => JSON.parse(value), [value])

  const updatedAt = useMemo(() => {
    const [{ timestamp = Date.now() } = {}] = authors.sort(
      ({ timestamp: a }, { timestamp: b }) => b - a,
    )
    return timestamp * 1000
  }, [authors])

  return (
    <span className="mb-16 flex flex-row gap-2 items-center flex-wrap">
      <p className="text-xs opacity-60">
        {dayjs(updatedAt).format('DD MMMM, YYYY')} by
      </p>
      {authors.map(({ name, email }, i) => (
        <p key={`${name}/${email}`}>
          {name}
          {!i && authors.length > 1 ? ',' : ''}
        </p>
      ))}
    </span>
  )
}
