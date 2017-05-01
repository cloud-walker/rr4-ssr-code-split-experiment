export default ({
  content = '',
  helmet,
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      ${helmet.title.toString()}
      <link rel="shortcut icon" href="http://favicon.placeholder" />
      <script src="/main.js" defer></script>
    </head>
    <body>
      <div id="hook">${content}</div>
    </body>
  </html>
`
