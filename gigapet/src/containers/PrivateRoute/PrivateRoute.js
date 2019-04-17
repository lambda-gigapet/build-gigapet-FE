import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ path, component: Component, ...rest }) => (
  <Route
    {...rest}
    path={path}
    render={props => (
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    )}
  />
)

export default PrivateRoute
