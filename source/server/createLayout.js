export default ({
  content = '',
  asyncState = {},
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <script>
        window.__ASYNC_COMPONENTS_STATE = ${JSON.stringify(asyncState)}
      </script>
      <script src="/main.js" defer></script>
    </head>
    <body>
      <div id="hook">${content}</div>
    </body>
  </html>
`
