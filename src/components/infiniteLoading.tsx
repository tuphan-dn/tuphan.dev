'use client'
import { useAsync, usePrevious, useWindowScroll } from 'react-use'
import clsx from 'clsx'

export type InfiniteLoadingProps = {
  onLoad: () => Promise<void>
  disabled?: boolean
}

export default function InfiniteLoading({
  onLoad,
  disabled = false,
}: InfiniteLoadingProps) {
  const { y } = useWindowScroll()
  const next = y + window.innerHeight >= document.body.offsetHeight
  const prev = usePrevious(next)
  const up = !prev && next

  const { loading } = useAsync(async () => {
    if (up && !disabled) await onLoad()
  }, [up, disabled, onLoad])

  return (
    <span
      className={clsx('loading loading-spinner loading-sm', {
        'opacity-0': !loading || disabled,
        'opacity-60': loading && !disabled,
      })}
    />
  )
}
