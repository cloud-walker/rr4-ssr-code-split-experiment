import React from 'react'
import {Route} from 'react-router-dom'

const Component = ({code, children}) => (
  <Route render={({staticContext}) => {
    if (staticContext) {
      staticContext.status = code
    }

    return children
  }}/>
)

export default Component
