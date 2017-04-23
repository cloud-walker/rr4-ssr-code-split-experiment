const React = require('react')
const {Route, Link} = require('react-router-dom')

const Component = () =>
  <div>
    <h2>App</h2>
    <nav>
      <Link to="/">home</Link>
      {' '}
      <Link to="/foo">foo</Link>
      {' '}
      <Link to="/bar">bar</Link>
    </nav>

    <Route exact path="/" render={() => <div>home</div>} />
    <Route path="/foo" render={() => <div>foo</div>} />
    <Route path="/bar" render={() => <div>bar</div>} />
  </div>

module.exports = Component
