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
        <Route exact path="/" component={Home} />
        <Route exact path="/:language/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
