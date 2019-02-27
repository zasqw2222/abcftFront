const Mock = require('mockjs')

module.exports = function(app) {
  app.get('/list', (req, res) => {
    const data = require('./mock/list')
    res.json(data)
  })
}