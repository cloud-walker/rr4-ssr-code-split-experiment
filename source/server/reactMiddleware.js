import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import createLayout from './createLayout'
import App from 'shared/components/App'
import reducers from 'shared/reducers'

export default async ctx => {
  const asyncContext = createAsyncContext()
  const routerContext = {}
  const store = createStore(reducers)

  const jsx = (
    <Provider store={store}>
      <AsyncComponentProvider asyncContext={asyncContext}>
        <StaticRouter location={ctx.request.url} context={routerContext}>
          <App />
        </StaticRouter>
      </AsyncComponentProvider>
    </Provider>
  )
  await asyncBootstrapper(jsx)

  const html = createLayout({
    content: renderToString(jsx),
    asyncState: asyncContext.getState(),
    reduxState: store.getState(),
  })

  ctx.body = html
}
