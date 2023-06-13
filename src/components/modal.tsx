'use client'
import { Fragment, ReactNode } from 'react'

import { X } from 'lucide-react'

export type ModalProps = {
  open?: boolean
  onCancel?: () => void
  children: ReactNode
  title?: ReactNode
}

export default function Modal({
  open = false,
  onCancel = () => {},
  children,
  title = null,
}: ModalProps) {
  return (
    <Fragment>
      <input type="checkbox" className="modal-toggle" checked={open} readOnly />
      <div className="modal">
        <div className="flex flex-col gap-2 modal-box">
          <div className="flex align-top">
            <div className="flex-auto">{title}</div>
            <button
              className="btn btn-square btn-ghost btn-xs"
              onClick={onCancel}
            >
              <X />
            </button>
          </div>
          <div>{children}</div>
        </div>
        <label className="modal-backdrop" onClick={onCancel} />
      </div>
    </Fragment>
  )
}
