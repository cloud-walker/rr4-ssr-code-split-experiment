import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'

import createLayout from './createLayout'
import App from 'shared/components/App'

export default ctx => {
  const routerContext = {}
  const content = renderToString(
    <StaticRouter location={ctx.request.url} context={routerContext}>
      <App />
    </StaticRouter>
  )
  const html = createLayout({content})

  ctx.body = html
}
