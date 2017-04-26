import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component'
import {JobProvider, createJobContext} from 'react-jobs'
import asyncBootstrapper from 'react-async-bootstrapper'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Helmet from 'react-helmet'

import createLayout from './createLayout'
import App from 'shared/components/App'
import reducers from 'shared/reducers'

export default async ctx => {
  const asyncContext = createAsyncContext()
  const jobContext = createJobContext()
  const routerContext = {}
  const store = createStore(reducers)

  const jsx = (
    <Provider store={store}>
      <JobProvider jobContext={jobContext}>
        <AsyncComponentProvider asyncContext={asyncContext}>
          <StaticRouter location={ctx.request.url} context={routerContext}>
            <App />
          </StaticRouter>
        </AsyncComponentProvider>
      </JobProvider>
    </Provider>
  )
  await asyncBootstrapper(jsx)
  const content = renderToString(jsx)

  console.log('reactMiddlware', ctx.request.url, jobContext.getState())

  const html = createLayout({
    content,
    asyncState: asyncContext.getState(),
    jobsState: jobContext.getState(),
    reduxState: store.getState(),
    helmet: Helmet.renderStatic(),
  })

  ctx.body = html
}
