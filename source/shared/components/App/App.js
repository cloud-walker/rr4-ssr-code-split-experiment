import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {pipe} from 'ramda'

import Home from 'shared/components/Home'
import Foo from 'shared/components/Foo'
import Bar from 'shared/components/Bar'

const mapStateToProps = state => ({
  counter: state.counter,
})

const enhance = pipe(
  connect(mapStateToProps),
  withRouter,
)

const Component = (props) => {
  console.log('rendering App', props)
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        {' '}
        <Link to="/foo">foo</Link>
        {' '}
        <Link to="/bar">bar</Link>
      </nav>

      <h2>{props.counter}</h2>
      <button onClick={() => props.dispatch({type: 'INCREMENT'})}>
        Increment
      </button>
      <button onClick={() => props.dispatch({type: 'DECREMENT'})}>
        Decrement
      </button>

      <Route exact path="/" component={Home}/>
      <Route path="/foo" component={Foo}/>
      <Route path="/bar" component={Bar}/>
    </div>
  )
}

export default enhance(Component)
