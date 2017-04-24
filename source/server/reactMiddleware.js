import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'

import createLayout from './createLayout'
import App from 'shared/components/App'

export default async ctx => {
  const asyncContext = createAsyncContext()
  const routerContext = {}

  const jsx = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <StaticRouter location={ctx.request.url} context={routerContext}>
        <App />
      </StaticRouter>
    </AsyncComponentProvider>
  )
  await asyncBootstrapper(jsx)
  const content = renderToString(jsx)
  const asyncState = asyncContext.getState()

  const html = createLayout({content, asyncState})

  ctx.body = html
}
