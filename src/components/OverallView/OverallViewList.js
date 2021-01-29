import React from "react";
import nodeData from '../../context/data/nodeData'


export default function OverallViewList({ nodetarget, nodeClickHandler }) {
  const boxHeight = window.innerHeight - 315;

  const badNodes = nodeData.nodes
    .filter((node) => {
      return node.Progress > 40 && node.Progress <= 50;
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

  const reallyBadNodes = nodeData.nodes
    .filter((node) => {
      return node.Progress <= 40;
    })
    .map((node) => (
      <li
        className="yellowText overallListObjects"
        key={node.id}
        id={node.id}
        nodetarget={nodetarget}
                onClick={nodeClickHandler}
      >
        <p>{node.name}</p>
      </li>
    ));

  const goodNodes = nodeData.nodes
    .filter((node) => {
      return node.Progress > 50;
    })
    .filter((node) => {
      return !node.name.includes("ST ") && !node.name.includes("Volvo");
    })
    .map((node) => (
      <li
        className="overallListObjects"
        key={node.id}
        id={node.id}
        nodetarget={nodetarget}
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
