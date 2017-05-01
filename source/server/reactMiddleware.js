import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Helmet from 'react-helmet'

import createLayout from './createLayout'
import App from 'shared/components/App'

export default async ctx => {
  const routerContext = {}

  const jsx = (
    <StaticRouter location={ctx.request.url} context={routerContext}>
      <App />
    </StaticRouter>
  )
  const content = renderToString(jsx)

  const html = createLayout({
    content,
    helmet: Helmet.renderStatic(),
  })

  ctx.status = routerContext.status || 200
  ctx.body = html
}
