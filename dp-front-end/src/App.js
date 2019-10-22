import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Login />

        <Route path="/register-form" component={Register} />
      </div>
    </Router>
  );
}

export default App;
