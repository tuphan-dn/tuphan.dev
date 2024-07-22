'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Link from 'next/link'

const MotionLink = motion(Link)

export type TagsProps = {
  value?: string[]
  active?: string
  className?: string
}

export default function Tags({
  className = 'flex flex-row flex-wrap gap-1',
  value = [],
  active,
}: TagsProps) {
  return (
    <div className={className}>
      <MotionLink
        className={clsx('badge badge-sm truncate', {
          'badge-outline': !!active,
          'badge-primary': !active,
          hidden: typeof active !== 'string',
        })}
        href="/"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        whileHover={{ opacity: 1, transition: { duration: 0 } }}
        transition={{ duration: 0.5 }}
      >
        all
      </MotionLink>
      {value.map((tag, i) => (
        <MotionLink
          key={tag}
          className={clsx('badge badge-sm truncate', {
            'badge-outline': active !== tag,
            'badge-primary': active === tag,
          })}
          href={`/?tag=${tag}`}
          initial={{ x: Math.min(8 * (i + 1), 64), opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          whileHover={{ opacity: 1, transition: { duration: 0 } }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </MotionLink>
      ))}
    </div>
  )
}
