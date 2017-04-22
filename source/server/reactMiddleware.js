const React = require('react')
const {renderToString} = require('react-dom/server')

const createLayout = require('./createLayout')
const App = require('shared/components/App')

const content = renderToString(<App />)
const html = createLayout({})

module.exports = ctx => {
  ctx.body = html
}
