'use client'
import { ReactNode } from 'react'
import classNames from 'classnames'

import { X } from 'lucide-react'
import { Dialog } from '@headlessui/react'

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
    <Dialog
      className={classNames('modal', { 'modal-open': open })}
      open={open}
      onClose={onCancel}
    >
      <Dialog.Panel className="modal-box max-h-fit">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
          onClick={onCancel}
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </Dialog.Panel>
    </Dialog>
  )
}
