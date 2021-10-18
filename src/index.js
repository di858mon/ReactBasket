import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';
import initialState from './store/initialState';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
