import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../router/components';

const App = (props) => (
  <Provider store={props.store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
