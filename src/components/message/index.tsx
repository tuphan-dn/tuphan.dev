'use client'

import Alert from './alert'

import { useMessage } from './store'

export default function Message() {
  const messages = useMessage(({ messages }) => messages)

  return (
    <div className="toast toast-bottom toast-end">
      {messages.map((msg) => (
        <Alert key={msg.id} {...msg} />
      ))}
    </div>
  )
}
