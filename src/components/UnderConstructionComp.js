import React from "react";
import UnderConstruction from "../assets/images/UnderConstruction.jpg";

export default function UnderConstructionComp() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  return (
    <div>
      <img
        src={UnderConstruction}
        width={windowWidth}
        height={windowHeight}
        style={{ objectFit: "cover" }}
        alt="Hello"
      ></img>
    </div>
  );
}