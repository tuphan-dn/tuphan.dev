'use client'

import { ArrowUpRightSquare } from 'lucide-react'

export type NewWindowProps = {
  href: string
  className?: string
  iconClassName?: string
}

export default function NewWindow({
  href,
  className = 'btn btn-sm btn-ghost btn-square',
  iconClassName = 'w-4 h-4',
}: NewWindowProps) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <ArrowUpRightSquare className={iconClassName} />
    </a>
  )
}
