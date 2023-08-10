'use client'
import { Fragment, ReactNode } from 'react'

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
  return (
    <Fragment>
      <input type="checkbox" className="modal-toggle" checked={open} readOnly />
      <div className="modal">
        <div className="modal-box max-h-fit">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
            onClick={onCancel}
          >
            <X className="w-4 h-4" />
          </button>
          {children}
        </div>
        <label className="modal-backdrop" onClick={onCancel} />
      </div>
    </Fragment>
  )
}
