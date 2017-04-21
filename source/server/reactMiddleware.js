const React = require('react')
const {renderToString} = require('react-dom/server')
const App = require('shared/components/App')

const content = renderToString(<App />)

module.exports = ctx => {
  ctx.body = content
}
