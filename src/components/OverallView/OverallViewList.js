import React from "react";
// import DesktopView from "../DesktopView"
import properMockData from "../../context/data/properMockData";

export default function OverallViewList({ nodetarget, nodeClickHandler }) {
  const boxHeight = window.innerHeight - 315;

  const badNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 40 && node.group <= 50;
    })
    .map((node) => (
      <li
        className="redText  overallListObjects"
        key={node.id}
        id={node.id}
        onClick={nodeClickHandler}
        nodetarget={nodetarget}
      >
        <p>{node.name}</p>
      </li>
    ));

  const reallyBadNodes = properMockData.nodes
    .filter((node) => {
      return node.group <= 40;
    })
    .map((node) => (
      <li
        className="yellowText overallListObjects"
        key={node.id}
        id={node.id}
        onClick={nodeClickHandler}
      >
        <p>{node.name}</p>
      </li>
    ));

  const goodNodes = properMockData.nodes
    .filter((node) => {
      return node.group > 50;
    })
    .filter((node) => {
      return !node.name.includes("ST ") && !node.name.includes("Volvo");
    })
    .map((node) => (
      <li
        className="overallListObjects"
        key={node.id}
        id={node.id}
        onClick={nodeClickHandler}
      >
        <p>{node.name}</p>
      </li>
    ));

  return (
    <div style={{ height: boxHeight, overflowY: "scroll" }}>
      <ol>
        {badNodes}
        {reallyBadNodes}
        {goodNodes}
      </ol>
    </div>
  );
}
