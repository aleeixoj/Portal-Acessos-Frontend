import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn'

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}
