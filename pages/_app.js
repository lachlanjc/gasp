import Head from 'next/head'
import Page from '../components/page'

const App = ({ Component, pageProps }) => (
  <Page>
    <Head>
      <meta name="theme-color" content="#ec008c" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,800,900i"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </Page>
)

export default App
