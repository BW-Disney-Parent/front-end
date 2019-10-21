import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/login.js';
import PrivateRoutes from './components/routes/PrivateRoutes.js';


function App() {
  return (
    <Router>
      <div className='app'>
        <h4>Disney Parents</h4>
        <ul>
          <li>
            <Link to ='/login'/>
          </li>
          <li>
            <Link to ='/users'/>
          </li>
        </ul>
        <Switch>
          <PrivateRoutes exact path ='/protected' component={Login}/>
          <Route path={'/login'} component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
