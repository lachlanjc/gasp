module.exports = {
  trailingSlash: true,
  images: {
    imageSizes: [446, 2048]
  },
  async redirects() {
    return [
      {
        source: '/read',
        destination: '/read/cover/',
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
