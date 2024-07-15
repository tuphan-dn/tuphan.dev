'use client'
import { motion } from 'framer-motion'

import Link from 'next/link'

const MotionLink = motion(Link)

export type TagsProps = {
  value?: string[]
}

export default function Tags({ value = [] }: TagsProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {value.map((tag, i) => (
        <MotionLink
          key={tag}
          className="badge badge-outline badge-sm truncate"
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
