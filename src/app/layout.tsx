import { ReactNode } from 'react'

import UiProvider from 'providers/ui.provider'

import Sidebar from './sidebar'
import Message from 'components/message/page'

import 'styles/global.scss'

export const metadata = {
  title: 'tuphan.dev',
  description: 'Tu Phan: The place where I experiment next-gen technologies.',
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
      <body>
        <UiProvider>
          <main className="flex w-full">
            <Sidebar />
            <div className="flex flex-col flex-auto pr-2 py-2">{children}</div>
          </main>
          <Message />
        </UiProvider>
      </body>
    </html>
  )
}
