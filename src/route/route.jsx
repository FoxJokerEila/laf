import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home/home'
// import Others from '../pages/others/others'

function MyRouter () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={props => <Home {...props} />} />
        <Route path='/home' component={props => <Home {...props} />} />
        {/* <Route path='/others' component={props => <Others {...props} />} /> */}
        {/* <Route path = '/login' component={(props)=>< Login {...props}/> } />
            <Route path = '/logingo' component={(props)=>< LoginGO {...props}/> } /> */}
      </Switch>
    </Router>
  )
}

export default MyRouter
