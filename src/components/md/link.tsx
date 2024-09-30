'use client'
import { useMemo, type ComponentProps } from 'react'
import { useAsync } from 'react-use'
import clsx from 'clsx'
import ky from 'ky'
import { type OgObject } from 'open-graph-scraper/types'

import { ExternalLink } from 'lucide-react'

export type LinkProps = ComponentProps<'a'>

export default function Link({
  className,
  children,
  href,
  ...props
}: LinkProps) {
  const { value } = useAsync(async () => {
    if (children !== '@preview') return undefined
    const data = await ky.get<OgObject>(`/api/og?url=${href}`).json()
    return data
  }, [children, href])

  const comp = useMemo(() => {
    if (!value || !value.ogImage || !value.ogImage[0]) return children
    return (
      <figure className="relative group">
        <img
          className="transition-all rounded-box shadow group-hover:shadow-lg"
          src={value.ogImage[0].url}
        />
        <ExternalLink className="w-4 h-4 absolute top-2 right-2 transition-all opacity-20 group-hover:opacity-100" />
      </figure>
    )
  }, [children, value])

  return (
    <a
      className={clsx(
        'transition-all text-info-content decoration-2 underline-offset-2 hover:underline-offset-4 decoration-info-content/20 hover:decoration-info-content/60',
        className,
      )}
      href={href}
      {...props}
    >
      {comp}
    </a>
  )
}
