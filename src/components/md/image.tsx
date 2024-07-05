import clsx from 'clsx'
import { type ComponentProps, Fragment } from 'react'

export type ImageProps = ComponentProps<'img'>

export default function Image({ alt, className, ...props }: ImageProps) {
  return (
    <Fragment>
      <img className={clsx('mb-2', className)} {...props} alt={alt} />
      <span className="text-xs opacity-60">{alt}</span>
    </Fragment>
  )
}
