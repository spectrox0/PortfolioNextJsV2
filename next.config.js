const withOptimizedImages = require('next-optimized-images')
const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = withOptimizedImages({
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, 'images')
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})
    config.plugins.push(new webpack.DefinePlugin(env))
    return config
  },
})
