'use client'

import { useCounter } from '@/hooks/useCounter'

export default function Gba() {
  const { counter, decrease } = useCounter(({ counter, decrease }) => ({
    counter,
    decrease,
  }))

  return (
    <div className="grid grid-cols-12 gap 2">
      <div className="col-span-4">
        <p>GBA</p>
      </div>
      <div className="col-span-4">
        <p>Counter: {counter}</p>
      </div>
      <div className="col-span-4">
        <button className="btn btn-secondary w-full" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  )
}
