import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
import Collection from "./Components/Collection";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
