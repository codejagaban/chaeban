import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from '../pages/index'
import Summary from '../pages/summary';

// Routes for the application
const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}/>
      <Route path="/" component={Summary}/>
  </Switch>

</Router>
  )


export default AppRouter
