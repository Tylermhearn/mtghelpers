import "./App.css";
import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import { Row, Col } from "reactstrap";
import LandingPage from "./Components/LandingPage";
import Collection from "./Components/Collection";
import NavigationBar from "./Components/NavigationBar";

function Routes() {
  return (
    <Switch>
      <Route exact path='/collection' component={Collection} />
      <Route path='/' component={LandingPage} />
    </Switch>
  );
}

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes />
    </div>
  );
}

export default App;
