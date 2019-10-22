import React from 'react';

import Register from './components/Register';
import ParentForm from './components/ParentForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register-form" component={Register} />
        <Login />
      </div>
      {/* <div>
        <ParentForm />
      </div> */}
    </Router>
  );
}

export default App;
