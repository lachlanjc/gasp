import Document, { Head, Main, NextScript } from 'next/document'

const title = 'Gasp!'
const description =
  'A free, comprehensive intro sex ed zine from your friends at Planned Parenthood.'
const url = 'https://gasp.netlify.com'
const image = url + '/static/card.png'

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Gasp! – a sex ed zine from Planned Parenthood</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />
          <meta name="theme-color" content="#ec008c" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
