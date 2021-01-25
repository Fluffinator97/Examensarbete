import React, { useRef, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";

import properMockData from "../../context/data/properMockData";

export default function ThreeDGraph() {
  const mql = window.matchMedia("(max-width: 1000px)");
  let windowWidth = window.innerWidth;
  if (mql > "1000") {
    windowWidth = window.innerWidth * 0.6;
  } else {
  }

  // Setting Sizes from the Graph
  const windowHeight = window.innerHeight - 300;
  // Setting The dist for the links
  const distRef = useRef(null);

  useEffect(() => {
    distRef.current.d3Force("link").distance(70);
  });

  return (
    <div className="first" style={{ height: windowHeight }}>
      {/* Rendering the Graph */}
      <ForceGraph3D
        graphData={properMockData}
        ref={distRef}
        nodeColor={(node) =>
          node.group <= 40 ? "red" : node.group <= 50 ? "yellow" : "white"
        }
        width={windowWidth}
        height={windowHeight}
        nodeLabel="name"
        nodeVal="jS"
        nodeOpacity={90}
        linkColor={(link) => "white"}
        linkWidth={1}
        cooldownTicks={100}
        backgroundColor="black"
        onEngineStop={() => distRef.current.zoomToFit(400, 10)}
        enableNodeDrag={false}
      />
    </div>
  );
}
