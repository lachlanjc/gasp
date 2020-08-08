module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/read',
        destination: '/read/cover',
        permanent: false
      },
      {
        source: '/static/gasp.pdf',
        destination: '/gasp.pdf',
        permanent: true
      }
    ]
  }
}
