'use client'
import { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Hello</p>
        <i className="isax isax-dcube" />
        <button className="btn btn-primary">Button</button>
      </main>
      <Footer />
    </Fragment>
  )
}
