import { ReactNode } from 'react'

import UiProvider from '@/providers/ui.provider'

import Sidebar from './sidebar'
import Message from '@/components/message'

import '@/styles/global.scss'

export const metadata = {
  title: 'Tu Phan',
  description: 'Tu Phan: my little corner.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
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
