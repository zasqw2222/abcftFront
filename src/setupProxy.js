const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.get('/list', (req, res) => {
    const data = require('./mock/list')
    res.json(data)
  })

  app.use(proxy('/group', { target: 'https://api.douban.com/v2', changeOrigin: true }))
}