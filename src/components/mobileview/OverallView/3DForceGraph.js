import React, { useRef, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";

import properMockData from "../../context/data/properMockData";

var NodeClickedID = 0;

export default function ThreeDGraph() {
  // Setting Sizes from the Graph
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - 300;
  // Setting The dist for the links
  const distRef = useRef(null);

  useEffect(() => {
    distRef.current.d3Force("link").distance(70);
  });

  const handleNodeClick = properMockData => {
    NodeClickedID = properMockData.id;
    console.log("You Clicked Node: " + NodeClickedID);
  };

  console.log(properMockData);

  return (
    <div className="first" style={{ height: windowHeight }}>
      {/* Rendering the Graph */}
      <ForceGraph3D
        graphData={properMockData}
        ref={distRef}
        nodeColor={node =>
          node.group <= 40 ? "red" : node.group <= 50 ? "yellow" : "white"
        }
        width={windowWidth}
        height={windowHeight}
        nodeLabel="name"
        nodeVal="jS"
        nodeOpacity={90}
        linkColor={link => "white"}
        linkWidth={1}
        cooldownTicks={100}
        onNodeClick={handleNodeClick}
        backgroundColor="black"
        onEngineStop={() => distRef.current.zoomToFit(400, 10)}
        enableNodeDrag={false}
      />
    </div>
  );
}