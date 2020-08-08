import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="theme-color" content="#ec008c" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,800,900i"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
