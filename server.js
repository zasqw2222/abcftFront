const dev = process.env.NODE_ENV !== 'production'

const next = require('next')
const express = require('express')

const app = next({ dev, quiet: false })

const handle = app.getRequestHandler()

const SERVE_PORT = process.env.SERVE_PORT || 3000

app.prepare().then(() => {
  const server = express()

  server.get('/user/:id', async (req, res) => {
    const html = await app.renderToHTML(req, res, '/user', req.params)
    res.send(html)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(SERVE_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${SERVE_PORT}`)
  })
})