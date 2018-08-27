const _ = require('lodash')
const fs = require('fs')

const sortOrder = _.fill(Array(23), '')
const items = {}

fs.readdirSync('./static/full_pages').forEach(file => {
  console.log(file)
  const id = _.toNumber(file.split(' ')[0])
  const title = file.replace(`${id.toString()} `, '').replace('.png', '')
  const internalUrl = _.kebabCase(title)
  sortOrder[id - 1] = internalUrl
  const src = `/static/full_pages/${encodeURIComponent(file)}`
  items[internalUrl] = { internalUrl, title, src }
})

const script = `
const sortOrder = ${JSON.stringify(sortOrder)}

const mapping = ${JSON.stringify(items)}

module.exports = { sortOrder, mapping }
`

fs.writeFile('./showcase-manifest.js', script, () => {
  console.log('done!')
})
