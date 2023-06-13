'use client'

import { useCounter } from 'hooks/useCounter'

export default function Gba() {
  const { counter, decrease } = useCounter(({ counter, decrease }) => ({
    counter,
    decrease,
  }))

  return (
    <div className="flex gap-2">
      <div className="basis-4/12">
        <p>GBA</p>
      </div>
      <div className="basis-4/12">
        <p>Counter: {counter}</p>
      </div>
      <div className="basis-4/12">
        <button className="btn btn-secondary w-full" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  )
}
