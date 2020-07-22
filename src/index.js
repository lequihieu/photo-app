import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App/App.js'
import {store} from './reducers/store'
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
