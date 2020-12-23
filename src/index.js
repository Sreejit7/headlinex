import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import './index.css';
ReactDOM.render(
  <Router>
    <Switch>
      <Route path = '/'>
       <App/>
      </Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
