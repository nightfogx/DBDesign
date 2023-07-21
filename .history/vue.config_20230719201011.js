const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/display/',

  outputDir: 'dist',
  base:'./',

  assetsDir: 'static',
  transpileDependencies: true
})
