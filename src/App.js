import React from "react";
import { Switch, Route } from "react-router";

import LaunchScreen from "./components/LaunchScreen";
import OverallView from "./components/OverallView/OverallView";
// import EntityReport from "./components/EntityReport";
import QualityView from "./components/QualityView";
import ProfileGraph from "./components/ProfileGraph";
import EnterpriseDataModel from "./components/EnterpriseDataModel";
import DesktopView from "./components/DesktopView";
import "./App.css";

export default function App() {
  let mql = window.matchMedia("(max-width: 1000px)");
  let mobileView = mql.matches;

  return (
    <div>
      {/* <Switch>
        <Route exact path="/" component={LaunchScreen}/>
        <Route path="/overall/:name" component={OverallView}/>
        <Route path="/entityReport/:name" component={EntityReport}/>
        <Route path="/QualityView/:name" component={QualityView}/>
        <Route path="/profile" component={ProfileGraph}/>
        <Route path="/EnterpriseDataModel" component={EnterpriseDataModel}/>
      </Switch> */}
      {mobileView ? (
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/overall/:name" component={OverallView} />
          {/* <Route path="/entityReport/:name" component={EntityReport} /> */}
          <Route path="/QualityView/:name" component={QualityView} />
          <Route path="/profile" component={ProfileGraph} />
          <Route path="/EnterpriseDataModel" component={EnterpriseDataModel} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/overall/:name" component={DesktopView} />
          {/* <Route path="/entityReport/:name" component={EntityReport} /> */}
          <Route path="/QualityView/:name" component={QualityView} />
          <Route path="/profile" component={ProfileGraph} />
          <Route path="/EnterpriseDataModel" component={EnterpriseDataModel} />
        </Switch>
      )}
    </div>
  );
}
