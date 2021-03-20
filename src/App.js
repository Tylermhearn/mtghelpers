import './App.css';
import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'

import { Row, Col } from 'reactstrap';
import LandingPage from './Components/LandingPage'
import Collection from './Components/Collection'

function App() {
  return (
    <Switch>
      <Route exact path='/collection' component={Collection} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}

export default () => {
  return (
    <div>
      <App />
    </div>
  );
}