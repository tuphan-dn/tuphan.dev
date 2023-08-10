export function asyncWait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
