const {resolve} = require('path')
const nodeExternals = require('webpack-node-externals')

const sourcePath = resolve(__dirname, 'source')
const buildPath = resolve(__dirname, 'build')

module.exports = [
  // Server config
  {
    entry: resolve(sourcePath, 'server'),
    output: {
      path: buildPath,
      filename: 'server.js',
    },
    externals: [nodeExternals()],
  },

  // Client config
  {
    entry: resolve(sourcePath, 'client'),
    output: {
      path: buildPath,
      filename: '[name].js',
    },
  },
]
