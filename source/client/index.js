import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from 'shared/components/App'

const hook = document.getElementById('hook')
const content = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

render(content, hook)
