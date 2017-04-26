export default ({
  content = '',
  asyncState = {},
  reduxState = {},
  jobsState = {},
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <link rel="shortcut icon" href="http://favicon.placeholder" />
      <script>
        window.__ASYNC_COMPONENTS_STATE = ${JSON.stringify(asyncState)}
        window.__JOBS_STATE = ${JSON.stringify(jobsState)}
        window.__REDUX_STATE = ${JSON.stringify(reduxState)}
      </script>
      <script src="/main.js" defer></script>
    </head>
    <body>
      <div id="hook">${content}</div>
    </body>
  </html>
`
