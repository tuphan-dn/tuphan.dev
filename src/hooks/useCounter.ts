import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { env } from '@/configs/env'

export type CounterStore = {
  counter: number
  increase: () => void
  decrease: () => void
}

export const useCounter = create(
  devtools(
    immer<CounterStore>((set) => ({
      counter: 0,
      increase: () =>
        set((state) => {
          state.counter += 1
        }),
      decrease: () =>
        set((state) => {
          state.counter -= 1
        }),
    })),
    {
      name: 'counter',
      enabled: env === 'development',
    },
  ),
)
