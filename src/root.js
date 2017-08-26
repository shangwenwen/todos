import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/:filter' component={App}/>
      </Switch>
    </Router>
  </Provider>
)

export default Root
