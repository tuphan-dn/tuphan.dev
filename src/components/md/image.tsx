import { type ComponentProps, Fragment, useMemo } from 'react'
import clsx from 'clsx'

export type ImageProps = ComponentProps<'img'>

export default function Image({
  alt = '',
  src: meta = '',
  className,
  ...props
}: ImageProps) {
  const { src } = useMemo(() => {
    if (typeof meta === 'string') return { src: meta }
    return meta
  }, [meta])
  return (
    <Fragment>
      <img
        className={clsx('mb-2 rounded-box', className)}
        src={src}
        alt={alt}
        {...props}
      />
      <span className="text-xs opacity-60">{alt}</span>
    </Fragment>
  )
}
