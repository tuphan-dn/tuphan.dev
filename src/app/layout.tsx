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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
          integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  )
}
