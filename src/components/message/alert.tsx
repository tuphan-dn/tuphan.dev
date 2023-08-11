'use client'
import { CSSProperties, useEffect, useState } from 'react'
import { useTween } from 'react-use'
import classNames from 'classnames'

import {
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Info,
  X,
  XCircle,
} from 'lucide-react'

import { MessageProps, MessageType, useMessage } from './store'

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000

export function AlertIcon({ type }: { type: MessageType }) {
  if (type === 'alert-error') return <XCircle />
  if (type === 'alert-warning') return <AlertTriangle />
  if (type === 'alert-info') return <Info />
  if (type === 'alert-success') return <CheckCircle />
  return <HelpCircle />
}

export default function Alert({
  id,
  type,
  message,
  ttl,
  onClick,
}: MessageProps) {
  const [hover, setHover] = useState(false)
  const t = useTween('linear', ttl, hover ? ONE_YEAR : 0)
  const unregister = useMessage(({ unregister }) => unregister)

  useEffect(() => {
    if (t === 1 && ttl >= 0) unregister(id)
  }, [t, ttl, id, unregister])

  return (
    <div
      className={classNames('cursor-pointer alert max-w-sm', type)}
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AlertIcon type={type} />
      <p className="whitespace-normal">{message}</p>
      <div
        className="radial-progress cursor-pointer"
        style={
          {
            '--value': t * 100,
            '--size': '2rem',
            '--thickness': ttl >= 0 ? '2px' : '0px',
          } as CSSProperties
        }
        onClick={(e) => {
          e.stopPropagation()
          return unregister(id)
        }}
      >
        <X className="w-5 h-5" />
      </div>
    </div>
  )
}
