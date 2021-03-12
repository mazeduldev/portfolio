import Head from 'next/head'
import Navbar from '../components/navbar'
import Cover from '../components/cover'

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
        Main area
      </main>

      <footer>
        Made with &hearts; by Mazid
      </footer>
    </div>
  )
}
