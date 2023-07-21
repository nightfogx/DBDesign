const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/display/',
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true
})
