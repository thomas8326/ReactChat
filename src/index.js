import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storage } from './reducers';

let store = createStore(storage);

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

