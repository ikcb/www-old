import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import global css files here
import 'bootstrap/dist/css/bootstrap.min.css';

// import user defined components here
import UnderConstruction from 'components/UnderConstruction';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={UnderConstruction} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
