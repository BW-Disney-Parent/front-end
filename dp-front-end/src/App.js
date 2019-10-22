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
        <Route path="/login" component={Login} />
        <Login />
        <Register />
      </div>
      <div>
        <ParentForm />
      </div>
    </Router>
  );
}

export default App;
