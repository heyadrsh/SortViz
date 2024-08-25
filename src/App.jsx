import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Visualizer } from "./components/Visualizer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/visualizer" component={Visualizer} />
      </Switch>
    </Router>
  );
}
