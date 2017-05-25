import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/library.js'


import './css/style.css';

import Root from './components/Root';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('main')
);
