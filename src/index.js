import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App.js'
import { rootReducer } from './reducers'
import {store} from './reducers/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
