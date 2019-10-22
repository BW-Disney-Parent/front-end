import React from 'react';
import Register from './components/Register';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './components/login.js';
import ParentForm from './components/ParentForm.js';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/register-form" component={Register} />

      </div>
      <div>
        <ParentForm/>
      </div>
    </Router>
  );
}

export default App;
