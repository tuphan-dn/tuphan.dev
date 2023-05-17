type Theme = 'light' | 'dark'

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any
  }
}

interface Window {
  ethereum: any
  desig: {
    uid: IUID
  }
}
