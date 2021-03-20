import Head from 'next/head'
import Navbar from '../components/navbar'
import Cover from '../components/cover'
import About from '../components/about'
import React from 'react'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mazid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main>
        <Cover></Cover>
        <About></About>
        Main area
      </main>

      <Footer></Footer>
    </div>
  )
}
