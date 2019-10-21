import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Login from './components/login.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route path="/login" component={Login} /> */}
        <Login route path='/login' component={Login}/>
      </div>
    </Router>
  );
}

export default App;
