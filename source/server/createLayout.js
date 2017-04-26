export default ({
  content = '',
  asyncState = {},
  reduxState = {},
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <script>
        window.__ASYNC_COMPONENTS_STATE = ${JSON.stringify(asyncState)}
        window.__REDUX_STATE = ${JSON.stringify(reduxState)}
      </script>
      <script src="/main.js" defer></script>
    </head>
    <body>
      <div id="hook">${content}</div>
    </body>
  </html>
`
