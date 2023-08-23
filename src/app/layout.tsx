import { ReactNode } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'

import UiProvider from '@/providers/ui.provider'

import Sidebar from './sidebar'
import Message from '@/components/message'

import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'Tu Phan',
  description:
    "I'm a cryptographer and working on blockchain technology currently. I cofounded sentre.io, and desig.io. Welcome to my little corner 🙏",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W9D63C4M87"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9D63C4M87');`}
        </Script>
      </head>
      <body className="w-full flex flex-row">
        <UiProvider>
          <Sidebar>{children}</Sidebar>
          <Message />
        </UiProvider>
      </body>
    </html>
  )
}
