# 前端ssr脚手架

## 开发与部署

`yarn dev` 启动开发服务器

`yarn build` 编译代码

`yarn start` 启动正式服务，如果需要负载均衡之类的请用nginx实现

## 页面缓存

由于众所周知的原因，前端还是需要一定的cache的，根据官方的示例：

```js
// 如果需要页面缓存，这里取消注释即可
server.get('/', (req, res) => renderAndCache(req, res, '/'))
```

在prepare后面的then里把需要缓存的页面如上写即可。如果页面过多或者内存泄漏，请不要使用lru-cache进行缓存。redis或许是更好的选择。

## 具名路径

具名路径就是`/test/:id`这种形式，nextjs原生是没有具名路径的，如果必须，需要在server.js里做相关配置：

```js
// 使用next渲染页面，express返回html字符串
server.get('/user/:id', async (req, res) => {
  const html = await app.renderToHTML(req, res, '/user', req.query)
  res.send(html)
})
```