const {resolve} = require('path')
const nodeExternals = require('webpack-node-externals')

const sourcePath = resolve(__dirname, 'source')
const buildPath = resolve(__dirname, 'build')

const resolveConfig = {
  modules: [
    'node_modules',
    sourcePath,
  ],
}

module.exports = [
  // Server config
  {
    entry: resolve(sourcePath, 'server'),
    output: {
      path: buildPath,
      filename: 'server.js',
    },
    externals: [nodeExternals()],
    resolve: resolveConfig,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {targets: {node: true}}],
              'react',
            ],
          },
        },
      ],
    },
  },

  // Client config
  {
    entry: resolve(sourcePath, 'client'),
    output: {
      path: buildPath,
      filename: '[name].js',
    },
    resolve: resolveConfig,
  },
]
