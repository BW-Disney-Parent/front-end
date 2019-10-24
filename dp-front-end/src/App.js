import React from 'react';

import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login.js';

import './App.css';
import PrivateRoute from './components/routes/PrivateRoutes';
import GetRequest from './components/GetRequest';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register-form" component={Register} />
      </div>
      <div>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route path="/getrequest" component={GetRequest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
