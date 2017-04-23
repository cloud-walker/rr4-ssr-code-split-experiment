import React from 'react'
import {Route, Link} from 'react-router-dom'

const Component = () =>
  <div>
    <nav>
      <Link to="/">home</Link>
      {' '}
      <Link to="/foo">foo</Link>
      {' '}
      <Link to="/bar">bar</Link>
    </nav>

    <h2>App</h2>

    <Route exact path="/" render={() => <div>home</div>} />
    <Route path="/foo" render={() => <div>foo</div>} />
    <Route path="/bar" render={() => <div>bar</div>} />
  </div>

export default Component
