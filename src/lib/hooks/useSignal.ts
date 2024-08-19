import { usePrevious } from 'react-use'

export function useSignal(value: boolean, signal: boolean) {
  const wire = usePrevious(value)
  return !!wire === !signal && value === signal
}
