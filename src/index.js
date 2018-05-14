import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import Store from './store'
import registerServiceWorker from './registerServiceWorker'

const Wrap = (
    <Provider {...new Store()}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  )
  ReactDOM.render(
    Wrap,
    document.getElementById('root')
  )
  registerServiceWorker()
