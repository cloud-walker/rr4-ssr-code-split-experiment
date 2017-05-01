import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import Home from 'shared/components/Home'
import Foo from 'shared/components/Foo'
import Bar from 'shared/components/Bar'
import NotFoundPage from 'shared/components/NotFoundPage'

const Component = (props) => {
  console.log('<App />')

  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        {' '}
        <Link to="/foo">foo</Link>
        {' '}
        <Link to="/bar">bar</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default Component
