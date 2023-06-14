'use client'
import { useState } from 'react'

import { useCounter } from 'hooks/useCounter'
import Modal from 'components/modal'

export default function Snes() {
  const [open, setOpen] = useState(false)
  const counter = useCounter(({ counter }) => counter)
  const increase = useCounter(({ increase }) => increase)

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12">
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          Open
        </button>
      </div>
      <Modal title={<h5>SNES</h5>} open={open} onCancel={() => setOpen(false)}>
        <div className="grid grid-cols-12 gap-2">
          <p className="col-span-12">Counter: {counter}</p>
          <button className="btn col-span-6" onClick={() => setOpen(false)}>
            Close
          </button>
          <button className="btn btn-primary col-span-6" onClick={increase}>
            Increase
          </button>
        </div>
      </Modal>
    </div>
  )
}
