'use client'
import { Fragment } from 'react'

import Header from './header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Hello</p>
        <i className="isax isax-dcube" />
        <button className="btn-primary btn">Button</button>
      </main>
    </Fragment>
  )
}
