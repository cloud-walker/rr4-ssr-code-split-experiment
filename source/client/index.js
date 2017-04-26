import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {AsyncComponentProvider} from 'react-async-component'
import {JobProvider} from 'react-jobs'
import asyncBootstrapper from 'react-async-bootstrapper'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from 'shared/components/App'
import reducers from 'shared/reducers'

const store = createStore(reducers, window.__REDUX_STATE)
const hook = document.getElementById('hook')
const content = (
  <Provider store={store}>
    <JobProvider rehydrateState={window.__JOBS_STATE}>
      <AsyncComponentProvider rehydrateState={window.__ASYNC_COMPONENTS_STATE}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AsyncComponentProvider>
    </JobProvider>
  </Provider>
)

asyncBootstrapper(content).then(() => render(content, hook))
