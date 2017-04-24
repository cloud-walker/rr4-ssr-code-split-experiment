import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {AsyncComponentProvider} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'

import App from 'shared/components/App'

const hook = document.getElementById('hook')
const content = (
  <AsyncComponentProvider rehydrateState={window.__ASYNC_COMPONENTS_STATE}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AsyncComponentProvider>
)

asyncBootstrapper(content).then(() => render(content, hook))
