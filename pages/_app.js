import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer';
import FeatureBar from '../components/FeatureBar'
import { useAllCookies } from '../lib/useAllCookies'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const { allCookies } = useAllCookies()

  return (
  <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/favicon/site.webmanifest"/>
    {allCookies == true ? <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-4B1MDD9XJF`}
            /> : null
            }
    {allCookies == true ? <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4B1MDD9XJF', {
                page_path: window.location.pathname,
              });
            `,
              }}
            /> : null
            }
  </Head>  
  <FeatureBar />
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp

