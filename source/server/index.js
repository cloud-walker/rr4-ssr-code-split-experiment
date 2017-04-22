const Koa = require('koa')
const serve = require('koa-static')

const {assetsPath} = require('../../project.config')
const reactMiddlware = require('./reactMiddleware')

const app = new Koa()
const port = 4000

app.use(serve(assetsPath))
app.use(reactMiddlware)

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
)
