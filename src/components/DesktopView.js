import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import properMockData from "../context/data/properMockData";

import ThreeDGraph from "./OverallView/3DGraph";
import OverallViewList from "./OverallView/OverallViewList";
import OverallViewMetrics from "./OverallView/OverallViewMetrics";
import BackgroundNBE from "../assets/images/BackgroundNBE.jpg";

export default function DesktopView() {
  const goodNodes = properMockData.nodes.filter((node) => {
    return node.group > 50;
  });
  const badNodes = properMockData.nodes.filter((node) => {
    return node.group > 40 && node.group <= 50;
  });
  const reallyBadNodes = properMockData.nodes.filter((node) => {
    return node.group <= 40;
  });

  const allNodes = properMockData.nodes.length;
  const numberOfGoodNodes = (goodNodes.length / allNodes) * 100;
  const numberOfBadNodes = (badNodes.length / allNodes) * 100;
  const numberOfReallyBadNodes = (reallyBadNodes.length / allNodes) * 100;
  const percentOfGoodNodes = numberOfGoodNodes.toFixed(2);
  const percentOfBadNodes = numberOfBadNodes.toFixed(2);
  const percentOfReallyBadNodes = numberOfReallyBadNodes.toFixed(2);
  
  return (
    <div>
      <Container fluid>
        <Row style={{ height: 30 }}></Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1, offset: 1 }}
            md={{ span: 1, offset: 1 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <a href={"/EnterpriseDataModel"} style={{ paddingLeft: "60%" }}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 6 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <p className="overallViewTitle">Overall View</p>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
            style={{ padding: 0 }}
          >
            <a href={"/profile"}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </a>
          </Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col></Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <div className="">
              {/* <p className=" overallViewStats ">Measurable Progress</p> */}
              <p className=" overallViewStats ">Good {percentOfGoodNodes}%</p>
              <p className=" overallViewStats yellowText ">
                Risk {percentOfBadNodes}%
              </p>
              <p className=" overallViewStats redText ">
                Alert {percentOfReallyBadNodes}%
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
          style={{ marginTop: 16 }}
        >
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ height: window.innerHeight}}><OverallViewMetrics /></div>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ height: window.innerHeight}}><ThreeDGraph /></div>
          </Col>
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ height: window.innerHeight}}><OverallViewList /></div>
          </Col>
        </Row>
      </Container>
      <div
        style={{ justifyContent: "center", backgroundColor: "black" }}
        className="footerLogoBox"
      >
        <svg width="50" height="50" className="logoSVG">
          <g>
            <title>background</title>
            <rect fill="#000" height="50" width="50" y="-1" x="-1" />
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
            >
              <rect
                fill="url(#gridpattern)"
                strokeWidth="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <g stroke="null" id="svg_10">
              <ellipse
                stroke="#b7aa7c"
                ry="3.20022"
                rx="3.20022"
                id="svg_1"
                cy="12.52605"
                cx="5.60831"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="4.51795"
                rx="4.51795"
                id="svg_2"
                cy="13.84378"
                cx="36.6505"
                fillOpacity="null"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="4.14146"
                rx="4.14146"
                id="svg_3"
                cy="42.11848"
                cx="17.65619"
                fillOpacity="null"
                strokeOpacity="null"
                fill="#fff"
              />
              <ellipse
                stroke="#b7aa7c"
                ry="5.5"
                rx="5.5"
                id="svg_4"
                cy="21"
                cx="21"
                fillOpacity="null"
                strokeOpacity="null"
                fill="#fff"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_5"
                y2="19"
                x2="16"
                y1="14"
                x1="8"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_7"
                y2="21"
                x2="26"
                y1="17"
                x1="33"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <line
                stroke="#b7aa7c"
                strokeLinecap="null"
                strokeLinejoin="null"
                id="svg_8"
                y2="26.14626"
                x2="19.78218"
                y1="37.91971"
                x1="18.10378"
                fillOpacity="null"
                strokeOpacity="null"
                fill="none"
              />
              <ellipse
                stroke="#ff3200"
                ry="2"
                rx="2"
                id="svg_9"
                cy="26"
                cx="26"
                fillOpacity="null"
                fill="#fff"
              >
                <animateTransform
                  attributeName="transform"
                  dur="5s"
                  type="rotate"
                  from="0 21 21"
                  to="360 21 21"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>
          </g>
        </svg>
        <p className="overallViewProductName">Natural Business Evolution</p>
        <p className="overallViewProductNameMP">Measurable Progress</p>
      </div>
    </div>
  );
}
