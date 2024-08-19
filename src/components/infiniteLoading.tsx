'use client'
import { useAsync, useWindowScroll } from 'react-use'
import clsx from 'clsx'

import { useSignal } from '@/lib/hooks/useSignal'

export type InfiniteLoadingProps = {
  onLoad: () => Promise<void>
  disabled?: boolean
}

export default function InfiniteLoading({
  onLoad,
  disabled = false,
}: InfiniteLoadingProps) {
  const { y } = useWindowScroll()
  const loadable = useSignal(
    y + window.innerHeight >= document.body.offsetHeight && !disabled,
    true,
  )

  const { loading } = useAsync(async () => {
    if (loadable) await onLoad()
  }, [loadable, onLoad])

  return (
    <span
      className={clsx('loading loading-spinner loading-sm', {
        'opacity-0': !loading,
        'opacity-60': loading,
      })}
    />
  )
}
