import 'assets/styles/_index.scss';

import HomePage from 'components/HomePage';
import UnderConstruction from 'components/UnderConstruction';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={UnderConstruction} />
      <Route path="/beta" component={HomePage}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
