const Koa = require('koa')
const app = new Koa()
const port = 4000

app.use(ctx => {
  ctx.body = 'Server bundle ready.'
})

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
)
