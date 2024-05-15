const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api',

    createProxyMiddleware({
      target: 'https://todo-backend-new-u6m3.onrender.com/api',
      changeOrigin: true,
    })
  );
};