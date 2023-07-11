////const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
  transpileDependencies: true
//})
module.exports = {
  devServer: {
    // 配置服务器代理
    proxy: {
      "/api": { // 代理接口前缀为/apis的请求
        "target": 'http://110.42.220.245:8081', // 对应的代理地址
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
      },
      // 配置多个代理
    }
  },
}