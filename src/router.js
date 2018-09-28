import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Layout} />
  </Switch>
);

export default Router;
