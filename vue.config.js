const { defineConfig } = require('@vue/cli-service')
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',

  devServer: {
    port: 7001,
    historyApiFallback: {
      index: '/index.html'
    }
  }
})
