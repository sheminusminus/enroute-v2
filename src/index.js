import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';

import App from './modules/app';

import configureStore from './store';

const store = configureStore();

render(
  <App store={store} />,
  document.querySelector('#app-root'),
);
