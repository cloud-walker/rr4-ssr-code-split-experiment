const React = require('react')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router')

const createLayout = require('./createLayout')
const App = require('shared/components/App')

module.exports = ctx => {
  const routerContext = {}
  const content = renderToString(
    <StaticRouter location={ctx.request.url} context={routerContext}>
      <App />
    </StaticRouter>
  )
  const html = createLayout({content})

  ctx.body = html
}
