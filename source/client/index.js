const React = require('react')
const {render} = require('react-dom')
const {BrowserRouter} = require('react-router-dom')

const App = require('shared/components/App')

const hook = document.getElementById('hook')
const content = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

render(content, hook)
