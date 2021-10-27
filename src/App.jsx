import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./compnents/pages/About";
import Home from "./compnents/pages/Home";
import Users from "./compnents/pages/Users";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
