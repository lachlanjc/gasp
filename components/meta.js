import Head from 'next/head'

const Meta = ({
  title = 'Gasp! – a sex ed zine from Planned Parenthood',
  description = 'A free, comprehensive intro sex ed zine from your friends at Planned Parenthood Generation Action @ Penn State University.',
  image = 'https://gasp.now.sh/card.png',
  url = ''
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={'https://gasp.now.sh' + url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Gasp!" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
  </Head>
)

export default Meta
