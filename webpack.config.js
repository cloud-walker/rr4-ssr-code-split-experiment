const {resolve} = require('path')
const nodeExternals = require('webpack-node-externals')
const {buildPath, sourcePath} = require('./project.config')

const resolveConfig = {
  modules: [
    sourcePath,
    'node_modules',
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
    target: 'node',
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
    target: 'web',
    node: {
      fs: 'empty',
      net: 'empty',
    },
    resolve: resolveConfig,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {modules: false}],
              'react',
            ],
          },
        },
      ],
    },
  },
]
