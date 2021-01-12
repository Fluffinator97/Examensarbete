import React from "react";
import { Switch, Route } from "react-router";

import LaunchScreen from "./components/mobileview/LaunchScreen";
import OverallView from "./components/mobileview/OverallView/OverallView";
import EntityReport from "./components/mobileview/EntityReport";
import QualityView from "./components/mobileview/QualityView";
import ProfileGraph from "./components/mobileview/ProfileGraph";
import EnterpriseDataModel from "./components/mobileview/EnterpriseDataModel";
// import UnderConstructionComp from "./components/UnderConstructionComp";
import "./App.css";

export default function App() {
  // const mql = window.matchMedia("(max-width: 1000px)");
  // let mobileView = mql.matches;

  return (
    <div>
      <Switch>
        <Route exact path="/" component={LaunchScreen}/>
        <Route path="/overall/:name" component={OverallView}/>
        <Route path="/entityReport/:name" component={EntityReport}/>
        <Route path="/QualityView/:name" component={QualityView}/>
        <Route path="/profile" component={ProfileGraph}/>
        <Route path="/EnterpriseDataModel" component={EnterpriseDataModel}/>
      </Switch>
      {/* {mobileView ? (
        <Switch>
          <Route exact path="/" component={LaunchScreen} />
          <Route path="/overall/:name" component={OverallView} />
          <Route path="/entityReport/:name" component={EntityReport} />
          <Route path="/QualityView/:name" component={QualityView} />
          <Route path="/profile" component={ProfileGraph} />
          <Route path="/EnterpriseDataModel" component={EnterpriseDataModel} />
        </Switch>
      ) : (
        <UnderConstructionComp />
      )} */}
    </div>
  );
}