export default ({content = ''}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <script src="/main.js" defer></script>
    </head>
    <body>
      <div id="hook">${content}</div>
    </body>
  </html>
`
