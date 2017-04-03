const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const historyMiddleWare = require('connect-history-api-fallback')

const app = new Koa();
const router = new Router();

app
  .use((ctx, next) => {
    historyMiddleWare()(ctx, null, () => {})
    return next()
  })
  .use(serve('dist'))

app.listen(3000)

console.log(`Listening on: http://localhost:3000`)
