'use client'
import { useCallback, useState } from 'react'
import copy from 'copy-to-clipboard'
import classNames from 'classnames'

import { Copy } from 'lucide-react'
import { asyncWait } from '@/helpers/utils'

export type ClipboardProps = {
  content: string
  idleText?: string
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

export default function Clipboard({
  content,
  idleText = 'Copy',
  className = 'btn btn-sm btn-ghost btn-square',
  iconClassName = 'w-4 h-4',
  tooltipClassName = 'tooltip tooltip-left',
}: ClipboardProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    copy(content)
    setCopied(true)
    await asyncWait(1500)
    return setCopied(false)
  }, [content])

  return (
    <span
      className={classNames(tooltipClassName, { 'tooltip-open': copied })}
      data-tip={copied ? 'Copied' : idleText}
    >
      <button className={className} onClick={onCopy}>
        <Copy className={iconClassName} />
      </button>
    </span>
  )
}
