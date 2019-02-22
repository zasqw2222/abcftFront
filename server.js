const dev = process.env.NODE_ENV !== 'production'

const next = require('next')
const express = require('express')
const LRUCache = require('lru-cache')

const ssrCache = new LRUCache({
  max: 1000, // cache item count
  // maxAge: 1000 * 60 * 60, // 1hour
  maxAge: 1000 * 30, // 30 ses
})

const app = next({ dev, quiet: false })

const handle = app.getRequestHandler()

const SERVE_PORT = process.env.SERVE_PORT || 8001

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(SERVE_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${SERVE_PORT}`)
  })
})

const getCacheKey = req => `${req.url}`

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}