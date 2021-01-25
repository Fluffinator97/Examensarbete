import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { ForceGraph2D } from "react-force-graph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import GraphData from "../context/data/MockDataFilter";
import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";
import BurnDownChart from "./Diagrams/BurnDownDiagram";
import VelocityChart from "./Diagrams/VelocityChart";
import Barchart from "./Diagrams/Barchart";
import LeadTimeChart from "./Diagrams/LeadTimeChart";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundNBE from "../assets/images/BackgroundNBE.jpg";

export default function TwoDGraph() {

  console.log(GraphData);

  const fgRef = useRef();

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <div style={{ height: "10%" }}>
      <img
        src={BackgroundNBE}
        width={windowWidth}
        height={windowHeight}
        style={{objectFit: "cover"}}
        className="backgroundImageFixer"
        alt="hello"
      ></img>
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
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
            {" "}
            <a href={"/overall/Metrics"}style={{paddingLeft: "60%"}}>
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
            <h1 className="overallViewTitle">Your Profile</h1>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <a href={"/EnterpriseDataModel"}>
            <FontAwesomeIcon icon={faAngleRight} size="3x"/>
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
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            xs={{ span: 10 }}
          >
            <h1 style={{ textAlign: "center" }}>Epic 1</h1>
            <h2 className="redText" style={{ textAlign: "center" }}>
              Alert 58%
            </h2>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            style={{ padding: 0, margin: 0 }}
          >
            <ForceGraph2D
              ref={fgRef}
              graphData={GraphData}
              width={windowWidth}
              height={150}
              nodeLabel="name"
              nodeVal={2}
              nodeColor={node => node.group <= 40 ? "red" : "white"}
              nodeOpacity={10}
              linkColor={link => "white"}
              linkWidth={1}
              backgroundColor="black"
              cooldownTicks={100}
              nodeCanvasObjectMode={() => "after"}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                const fontSize = 12 / globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                //Here you can choose a specific color by writing t.ex "white" or as I have done node.color to match with the node color
                ctx.fillStyle = "node.color";
                ctx.fillText(label, node.x, node.y + 8);
              }}
              onEngineStop={() => fgRef.current.zoomToFit(400, 40)}
              dagMode="rl"
              dagLevelDistance={30}
            />
          </Col>
        </Row>
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
        >
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
          <Col
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 10 }}
            xs={{ span: 10 }}
          >
            <Card style={{ marginBottom: "1rem" }}>
              <Card.Header>
                <h1 className="profileTitle">Involved Features</h1>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                      <p>Feature 1: 58%</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <p>Feature 2: 64%</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <p>Feature 3: 82%</p>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card style={{ marginBottom: 100, padding: 0 }}>
              <Card.Header>
                <h1 className="profileTitle">KPI's</h1>
                {/* <p>Story Points: 100</p> */}
              </Card.Header>
              <Card.Body style={{ padding: 1, paddingTop: 10 }}>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <h1 className="entityTypeTitle">Completed</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <DoubleCircleDiagram />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <h1 className="entityTypeTitle">Forecast</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <BurnDownChart />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      <h1 className="entityTypeTitle"> Velocity</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <VelocityChart />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <h1 className="entityTypeTitle">Planned vs Actual</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <Barchart />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <h1 className="entityTypeTitle">Lead time</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <LeadTimeChart />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <h1 className="entityTypeTitle">Cycle Time</h1>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <p className="entityExplanation">
                          Nunc lobortis dui sed justo mattis auctor. Praesent
                          erat magna, finibus eu leo a, volutpat viverra risus.
                          Aenean pellentesque interdum erat ut lacinia.
                        </p>
                        <LeadTimeChart />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={{ span: 1 }}
            md={{ span: 1 }}
            sm={{ span: 1 }}
            xs={{ span: 1 }}
          ></Col>
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