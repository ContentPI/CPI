// Dependencies
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from '@contentpi/ui-kit'

// Pages
import Home from '../Home'
import Login from '../Login'
import MyApps from '../Dashboard/components/MyApps'
import DashboardHome from '../Dashboard/components/Home'
import PageNotFound from '../PageNotFound'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:language/" component={Home} />
        <Route exact path="/:language/dashboard/:appId/:stage" component={DashboardHome} />
        <Route exact path="/:language/dashboard" component={MyApps} />
        <Route exact path="/:language/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
