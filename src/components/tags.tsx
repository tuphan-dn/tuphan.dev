'use client'
import { motion } from 'framer-motion'

export type TagsProps = {
  value?: string[]
}

export default function Tags({ value = [] }: TagsProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {value.map((tag, i) => (
        <motion.a
          key={tag}
          className="badge badge-outline badge-sm truncate"
          href={`/?tag=${tag}`}
          initial={{ x: 16 * (i + 1), opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          whileHover={{ opacity: 1, transition: { duration: 0 } }}
          transition={{ duration: 0.5 }}
        >
          {tag}
        </motion.a>
      ))}
    </div>
  )
}
