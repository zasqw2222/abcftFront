import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>   
      </div>
    )
  }
}

export default App;
