import { ReactNode } from 'react'
import type { Metadata } from 'next'

import UiProvider from '@/providers/ui.provider'

export const metadata: Metadata = {
  title: 'Blogy.me',
  description:
    'The markdown 📜 template blog with 👀-pleasant colors and animation; Especially, 🎉 open-source and 🔋 batteries-included.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  )
}
