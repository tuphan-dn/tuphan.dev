import { ReactNode } from 'react'
import type { Metadata } from 'next'

import deplConfig from '@/configs/depl.config'

const title = 'tuphan.dev | Pixel'
const description = 'Convert images to pixel arts.'
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(deplConfig.host),
  openGraph: {
    title,
    description,
    images: ['/og-pixel.png'],
  },
}

export default function PixelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-row justify-center rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 transition-all p-4">
      <div className="max-w-[1024px] w-full grid grid-cols-12 gap-2">
        <div className="col-span-full">{children}</div>
      </div>
    </div>
  )
}
