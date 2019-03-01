import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import globalConfigStore from './stores/globalConfigStore'
// import i18n (needs to be bundled ;))
import './i18n'

const stores = {
  globalConfigStore
}

// 方便调试
window._APP_STATE_ = stores

configure({
  enforceActions: 'never'
})

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
