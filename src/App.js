import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import './theme/app.scss'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    )
  }
}
export default App
