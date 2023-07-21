const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  base:'./',

  assetsDir: 'static',
  transpileDependencies: true
})
