import Koa from 'koa'
import serve from 'koa-static'

import {assetsPath} from '../../project.config'
import reactMiddlware from './reactMiddleware'

const app = new Koa()
const port = 4000

app.use(serve(assetsPath))
app.use(reactMiddlware)

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
)
