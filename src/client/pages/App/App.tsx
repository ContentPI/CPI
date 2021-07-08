// Dependencies
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from '@contentpi/ui-kit'

// Pages
import Home from '../Home'
import Login from '../Login'
import Dashboard from '../Dashboard'
import Apps from '../Apps'
import PageNotFound from '../PageNotFound'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:language/" component={Home} />
        <Route exact path="/:language/dashboard" component={Dashboard} />
        <Route exact path="/:language/login" component={Login} />
        <Route exact path="/:language/apps" component={Apps} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
