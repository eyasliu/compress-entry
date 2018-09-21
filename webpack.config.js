const WebpackBar = require('webpackbar');
const path = require('path')
const fs = require('fs')

let externals = [
  'fsevents'
]
try {
  const npmPackage = JSON.parse(fs.readFileSync(path.resolve('package.json')).toString('utf8'))
  externals = externals.concat(Object.keys(npmPackage.dependencies))
} catch (err) {
  // externals = []
}

module.exports = {
  externals,
  output: {
    // libraryTarget: 'commonjs2',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  // node: {
  //   __dirname: true,
  //   __filename: true
  // },
  resolve: {
    extensions: ['.js', '.json', '.node'],
    alias: {}
  },
  target: 'node',
  plugins: [
    new WebpackBar({
      name: "node",
      // profile: true
    })
  ]
}