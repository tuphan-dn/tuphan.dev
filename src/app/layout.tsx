import CsrProvider from 'providers/csr.provider'

import 'styles/global.scss'

export const metadata = {
  title: 'Tu Phan',
  description: 'Tu Phan: My Little Corner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
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
        <link href="/iconsax/style.css" rel="stylesheet" />
      </head>
      <body>
        <CsrProvider>{children}</CsrProvider>
      </body>
    </html>
  )
}
