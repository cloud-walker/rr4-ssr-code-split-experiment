const Koa = require('koa')

const reactMiddlware = require('./reactMiddleware')

const app = new Koa()
const port = 4000

app.use(reactMiddlware)

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
)
