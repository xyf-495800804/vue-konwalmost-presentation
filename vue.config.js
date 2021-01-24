module.exports = {
  /* 禁止eslint检测 */
  lintOnSave: false,
  /* 配置代理 */
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      },
      "/users": {
        changeOrigin: true,
        target: "http://127.0.0.1:3000"
      },
      "/articles": {
        changeOrigin: true,
        target: "http://127.0.0.1:3000"
      },
      "/imgs": {
        changeOrigin: true,
        target: "http://127.0.0.1:3000"
      },
      "/questions": {
        changeOrigin: true,
        target: "http://127.0.0.1:3000"
      }
    }
  }
};
