const {resolve} = require('path')
const appRootDir = require('app-root-dir')

const buildPath = resolve(appRootDir.get(), 'build')

module.exports = {
  sourcePath: resolve(appRootDir.get(), 'source'),
  buildPath,
  assetsPath: buildPath,
}
