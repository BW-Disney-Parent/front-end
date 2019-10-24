import React from 'react';

import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login.js';

import './App.css';
import PrivateRoute from './components/routes/PrivateRoutes';

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
          <Route path={'/login'} component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
