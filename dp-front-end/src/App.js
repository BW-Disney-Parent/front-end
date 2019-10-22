import React from 'react';

import Register from './components/Register';
import ParentForm from './components/ParentForm.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
      </div>
      <div>
        <ParentForm/>
        <Login/>
        <Register/>
      </div>
    </Router>
  );
}

export default App;
