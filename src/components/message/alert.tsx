'use client'
import { CSSProperties, useEffect } from 'react'
import { useTween } from 'react-use'

import {
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Info,
  X,
  XCircle,
} from 'lucide-react'

import { MessageProps, MessageType, useMessage } from './store'

export function AlertIcon({ type }: { type: MessageType }) {
  if (type === 'alert-error') return <XCircle />
  if (type === 'alert-warning') return <AlertTriangle />
  if (type === 'alert-info') return <Info />
  if (type === 'alert-success') return <CheckCircle />
  return <HelpCircle />
}

export default function Alert({ id, type, message, ttl }: MessageProps) {
  const t = useTween('linear', ttl)
  const unregister = useMessage(({ unregister }) => unregister)

  useEffect(() => {
    if (t === 1 && ttl >= 0) unregister(id)
  }, [t, ttl, id, unregister])

  return (
    <div className={'alert ' + type}>
      <AlertIcon type={type} />
      <div>
        <p>{message}</p>
      </div>
      <div
        className="radial-progress cursor-pointer"
        style={
          {
            '--value': t * 100,
            '--size': '2rem',
            '--thickness': ttl >= 0 ? '2px' : '0px',
          } as CSSProperties
        }
        onClick={() => unregister(id)}
      >
        <X />
      </div>
    </div>
  )
}
