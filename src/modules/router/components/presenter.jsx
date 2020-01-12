import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Paths } from '../constants';

import UserAuth from '../../auth/components';

const Routes = () => (
  <Switch>
    <Route path={Paths.USER_AUTH} component={UserAuth} />
  </Switch>
);

export default Routes;
