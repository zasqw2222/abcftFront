import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import Header from './components/Header'
import Home from './containers/Home'

const HomeContainer = styled.div`
  min-height: 100vh;
  transition: .2s;
  background: ${props => props.theme === 'light' ? '#f5f5f5' : '#121417'};
`

@inject('globalConfigStore')
@observer
class Page extends Component {
  render() {
    const { theme } = this.props.globalConfigStore
    return (
      <HomeContainer className="App" theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>   
      </HomeContainer>
    )
  }
}

const Loader = () => (
  <div className="App">
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
};
