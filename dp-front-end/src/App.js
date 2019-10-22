import React from 'react';


import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/register-form" component={Register} />

      </div>
    </Router>
  );
}

export default App;
