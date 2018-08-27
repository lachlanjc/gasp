const { mapping } = require('./showcase-manifest')

const routes = Object.keys(mapping)

module.exports = {
  exportPathMap(defaultPathMap) {
    for (const route of routes) {
      defaultPathMap[`/read/${route}`] = {
        page: '/read',
        query: { item: route }
      }
    }
    return defaultPathMap
  }
}
