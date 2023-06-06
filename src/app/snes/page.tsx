'use client'

import { useCallback } from 'react'

export default function Snes() {
  const onOpen = useCallback(() => {
    const dialog = document.getElementById('snes_modal')
    if (dialog) (dialog as HTMLDialogElement).showModal()
  }, [])
  const onClose = useCallback(() => {
    const dialog = document.getElementById('snes_modal')
    if (dialog) (dialog as HTMLDialogElement).close()
  }, [])

  return (
    <div>
      <button className="btn btn-primary" onClick={onOpen}>
        Open
      </button>
      <dialog id="snes_modal" className="modal">
        <div className="flex flex-col gap-2 modal-box">
          <p>SNES</p>
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  )
}
