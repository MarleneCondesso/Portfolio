import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
<>      <Head>
        <title>Marlene Condesso | Portfolio</title>
        <meta name='description' />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Component {...pageProps} />
  </>
    )
}
