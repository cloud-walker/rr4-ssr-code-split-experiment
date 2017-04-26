import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {AsyncComponentProvider} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from 'shared/components/App'
import reducers from 'shared/reducers'

const store = createStore(reducers)
const hook = document.getElementById('hook')
const content = (
  <Provider store={store}>
    <AsyncComponentProvider rehydrateState={window.__ASYNC_COMPONENTS_STATE}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AsyncComponentProvider>
  </Provider>
)

asyncBootstrapper(content).then(() => render(content, hook))
