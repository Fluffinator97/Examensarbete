import React from "react";
import { Switch, Route } from "react-router";

import LaunchScreen from "./components/LaunchScreen";
import OverallView from "./components/OverallView/OverallView";
import ProfileGraph from "./components/ProfileGraph";
import DesktopView from "./components/DesktopView";
import PageNotFound from "./components/ErrorPage"
import "./App.css";

export default function App() {
  let mql = window.matchMedia("(max-width: 1000px)");
  let mobileView = mql.matches;

  return (
    <div>
      {mobileView ? (
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/overall/:name" component={OverallView} />
          <Route path="/profile" component={ProfileGraph} />
          <Route component={PageNotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/overall" component={DesktopView} />
          <Route path="/profile" component={ProfileGraph} />
          <Route component={PageNotFound} />
        </Switch>
      )}
    </div>
  );
}
