import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListGroup from "react-bootstrap/ListGroup";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useParams, useHistory } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

export default function QualityView() {
  let history = useHistory();
  console.log(history);

  const { name } = useParams();
  console.log(name);

  return (
    <div className="backgroundImage">
      <iframe
        id="overall"
        title="overall"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <Container fluid className="">
        <Row
          xl={{ cols: 12 }}
          lg={{ cols: 12 }}
          md={{ cols: 12 }}
          sm={{ cols: 12 }}
          xs={{ cols: 12 }}
          style={{ paddingTop: 16 }}
        >
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="3x"
              onClick={history.goBack}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <h1 className="entityTitle">Quality View</h1>
          </Col>
          <Col
            lg={{ span: 2 }}
            md={{ span: 2 }}
            sm={{ span: 2 }}
            xs={{ span: 2 }}
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
            <h1 style={{ textAlign: "center" }}>{name}</h1>
            <p className="qualityPStyle" style={{ textAlign: "center" }}>
              Overall Performance 89%
            </p>
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
          >
            <Accordion style={{ marginBottom: 100 }}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Portfolios
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ width: window.innerWidth / 2.5 }}
                      >
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Portfolio 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 5</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 8</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Epics Delivered 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Programs
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ width: window.innerWidth / 3 }}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Program 4</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ width: window.innerWidth / 2 }}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 50</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 20</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 80</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Feature enablement 40</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Teams
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ display: "inline-flex" }}>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ width: window.innerWidth / 3 }}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 1</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 2</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 3</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 4</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 5</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 6</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 7</p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">Team 8</p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ width: window.innerWidth / 2 }}>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="qualityview/defect">
                          <p className="qualityPStyle">
                            Delivered Stories {Math.floor(Math.random() * 300)}
                          </p>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <div style={{ justifyContent: "center", backgroundColor: "black" }} className="footerLogoBox">
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