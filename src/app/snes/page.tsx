'use client'
import { useState } from 'react'

import { useCounter } from 'hooks/useCounter'
import Modal from 'components/daisyui/modal'

export default function Snes() {
  const [open, setOpen] = useState(false)
  const counter = useCounter(({ counter }) => counter)
  const increase = useCounter(({ increase }) => increase)

  return (
    <div className="flex gap-2">
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Open
      </button>
      <Modal title={<h5>SNES</h5>} open={open} onCancel={() => setOpen(false)}>
        <div className="flex flex-col gap-2">
          <p>Counter: {counter}</p>
          <div className="flex gap-2">
            <div className="basis-6/12">
              <button className="btn w-full" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="basis-6/12">
              <button className="btn btn-primary w-full" onClick={increase}>
                Increase
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
