import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mazid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        Navigation area
      </nav>

      <main>
        Main area
      </main>

      <footer>
        Made with &hearts; by Mazid
      </footer>
    </div>
  )
}
