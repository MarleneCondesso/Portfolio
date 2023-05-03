import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>  
          <Head>
            <title>Marlene Condesso | Portfolio</title>
            <meta name='description' />
            <link rel='icon' href='/images/logoDarkTab.png' className='h-[400px]'/>
            <link rel="apple-touch-icon" href='/images/logoDarkTab.png' className='h-[400px]'/>
          </Head>
          <ThemeProvider>
            {/**<NextNProgress options={{ easing: 'ease', speed: 500 }}/>**/}
            <Component {...pageProps} />
          </ThemeProvider>   
    </>
    )
}
