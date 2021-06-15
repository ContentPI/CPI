// Dependencies
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from '@contentpi/ui-kit'

// Pages
import Home from '../Home'
import Login from '../Login'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
