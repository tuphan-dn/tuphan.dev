'use client'
import dynamic from 'next/dynamic'
import { Fragment, ReactNode } from 'react'

import Splash from 'components/splash'

export default dynamic(
  () =>
    Promise.resolve(({ children }: { children: ReactNode }) => {
      return <Fragment>{children}</Fragment>
    }),
  {
    ssr: false,
    loading: () => <Splash open />,
  },
)
