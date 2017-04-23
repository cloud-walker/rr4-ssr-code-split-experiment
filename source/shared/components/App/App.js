import React from 'react'
import {Route, Link} from 'react-router-dom'

import Home from 'shared/components/Home'
import Foo from 'shared/components/Foo'
import Bar from 'shared/components/Bar'

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

    <Route exact path="/" component={Home}/>
    <Route path="/foo" component={Foo}/>
    <Route path="/bar" component={Bar}/>
  </div>

export default Component
