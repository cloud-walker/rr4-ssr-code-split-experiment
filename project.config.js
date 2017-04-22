const {resolve} = require('path')

const buildPath = resolve(__dirname, 'build')

module.exports = {
  sourcePath: resolve(__dirname, 'source'),
  buildPath,
  assetsPath: buildPath,
}
