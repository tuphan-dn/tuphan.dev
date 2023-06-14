export function waitAsync(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
