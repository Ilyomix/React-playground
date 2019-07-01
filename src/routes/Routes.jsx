import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from '../views/App/App';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/weather" exact />
        <Route path="/weather" exact component={App} />
        <Route path="/weather/:city" component={App} />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};

export default Routes;
