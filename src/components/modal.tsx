'use client'
import { ReactNode, useEffect, useState } from 'react'

import { X } from 'lucide-react'

export type ModalProps = {
  open?: boolean
  onCancel?: () => void
  children: ReactNode
}

export default function Modal({
  open = false,
  onCancel = () => {},
  children,
}: ModalProps) {
  const [ref, setRef] = useState<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!ref) return () => {}
    if (open) ref.showModal()
    else ref.close()
  }, [open, ref])

  return (
    <dialog className="modal" ref={setRef}>
      <form method="dialog" className="modal-box max-h-fit">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
          onClick={onCancel}
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </form>
      <div className="modal-backdrop" onClick={onCancel} />
    </dialog>
  )
}
