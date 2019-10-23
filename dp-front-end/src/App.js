import React from 'react';

import Register from './components/Register';
import ParentForm from './components/ParentForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <PrivateRoute path='/parent-form' component={ParentForm} />
      </div>
    </Router>
  );
}

export default App;
