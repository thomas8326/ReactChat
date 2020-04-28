import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { storage } from './reducers';
import ReduxThunk from 'redux-thunk'
import { websocketMiddleware }from './middleware/websocket/websocket-middleware';

let store = createStore(storage, applyMiddleware(ReduxThunk, websocketMiddleware));

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

