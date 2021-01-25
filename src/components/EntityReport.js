// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// import { useParams, useHistory } from "react-router";

// import DoubleCircleDiagram from "./Diagrams/DoubleCircleDiagram";
// import BurnDownChart from "./Diagrams/BurnDownDiagram";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BackgroundNBE from "../assets/images/BackgroundNBE.jpg";

// export default function EntityReport() {
//   const { name } = useParams();
//   console.log(name);
//   const capsName = name.toUpperCase();
//   console.log(capsName);

//   let history = useHistory();
//   const path = window.location.pathname;
//   console.log(path);

//   const objective = path.includes("Objective");
//   const epic = path.includes("Epic");
//   const feature = path.includes("Feature");
//   const story = path.includes("Story");

//   console.log(objective);
//   console.log(epic);
//   console.log(feature);
//   console.log(story);

//   const windowHeight = window.innerHeight;

//   return (
//     <div style={{ height: "10%" }}>
//       <img
//         src={BackgroundNBE}
//         width={"100%"}
//         height={windowHeight}
//         className="backgroundImageFixer"
//         alt="hello"
//       ></img>
//       <iframe
//         id="overall"
//         title="entity"
//         style={{ width: "100%", height: "100%" }}
//       ></iframe>
//       <Container>
//         <Row
//           xl={{ cols: 12 }}
//           lg={{ cols: 12 }}
//           md={{ cols: 12 }}
//           sm={{ cols: 12 }}
//           xs={{ cols: 12 }}
//           style={{ paddingTop: 16 }}
//         >
//           <Col
//             lg={{ span: 2 }}
//             md={{ span: 2 }}
//             sm={{ span: 2 }}
//             xs={{ span: 2 }}
//           >
//             <FontAwesomeIcon
//               icon={faTimesCircle}
//               size="3x"
//               onClick={history.goBack}
//               style={{ cursor: "pointer" }}
//             />
//           </Col>
//           <Col
//             lg={{ span: 8 }}
//             md={{ span: 8 }}
//             sm={{ span: 8 }}
//             xs={{ span: 8 }}
//             style={{ textAlign: "center" }}
//           >
//             <h1 className="entityTitle">Entity Report</h1>
//             {/* <p>Measurable Progress</p> */}
//           </Col>
//           <Col
//             lg={{ span: 2 }}
//             md={{ span: 2 }}
//             sm={{ span: 2 }}
//             xs={{ span: 2 }}
//           ></Col>
//         </Row>
//         <Row
//           xl={{ cols: 12 }}
//           lg={{ cols: 12 }}
//           md={{ cols: 12 }}
//           sm={{ cols: 12 }}
//           xs={{ cols: 12 }}
//         >
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//           <Col
//             lg={{ span: 10 }}
//             md={{ span: 10 }}
//             sm={{ span: 10 }}
//             xs={{ span: 10 }}
//           >
//             <h1 className="entityTypeTitle">{capsName}</h1>
//             <p className="entityExplanation">Job Size 40</p>
//           </Col>
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//         </Row>
//         <Row
//           xl={{ cols: 12 }}
//           lg={{ cols: 12 }}
//           md={{ cols: 12 }}
//           sm={{ cols: 12 }}
//           xs={{ cols: 12 }}
//           style={{ marginBottom: "1rem" }}
//         >
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//           <Col
//             lg={{ span: 10 }}
//             md={{ span: 10 }}
//             sm={{ span: 10 }}
//             xs={{ span: 10 }}
//           >
//             <Card>
//               <Card.Header>
//                 <h1 className="entityTypeTitle"> Est. Completion</h1>
//               </Card.Header>
//               <Card.Body>
//                 <p className="entityExplanation">
//                   Nunc lobortis dui sed justo mattis auctor. Praesent erat
//                   magna, finibus eu leo a, volutpat viverra risus. Aenean
//                   pellentesque interdum erat ut lacinia.
//                 </p>
//                 <DoubleCircleDiagram />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//         </Row>
//         <Row
//           xl={{ cols: 12 }}
//           lg={{ cols: 12 }}
//           md={{ cols: 12 }}
//           sm={{ cols: 12 }}
//           xs={{ cols: 12 }}
//           style={{ marginBottom: "1rem" }}
//         >
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//           <Col
//             lg={{ span: 10 }}
//             md={{ span: 10 }}
//             sm={{ span: 10 }}
//             xs={{ span: 10 }}
//           >
//             <Card>
//               <Card.Header>
//                 <h1 className="entityTypeTitle">Est. Time to Completion </h1>
//               </Card.Header>
//               <Card.Body>
//                 <p className="entityExplanation">
//                   Nunc lobortis dui sed justo mattis auctor. Praesent erat
//                   magna, finibus eu leo a, volutpat viverra risus. Aenean
//                   pellentesque interdum erat ut lacinia.
//                 </p>
//                 <BurnDownChart />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//         </Row>
//         <Row
//           xl={{ cols: 12 }}
//           lg={{ cols: 12 }}
//           md={{ cols: 12 }}
//           sm={{ cols: 12 }}
//           xs={{ cols: 12 }}
//           style={{ marginBottom: "1rem" }}
//         >
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//           <Col
//             lg={{ span: 10 }}
//             md={{ span: 10 }}
//             sm={{ span: 10 }}
//             xs={{ span: 10 }}
//           >
//             <Card style={{ marginBottom: 100 }}>
//               <Card.Header>
//                 {objective ? (
//                   <h1 className="entityTypeTitle">Involved Epics</h1>
//                 ) : null}
//                 {epic ? (
//                   <h1 className="entityTypeTitle">Involved Features</h1>
//                 ) : null}
//                 {feature ? (
//                   <h1 className="entityTypeTitle">Involved Stories</h1>
//                 ) : null}
//                 {story ? (
//                   <h1 className="entityTypeTitle">Involved Tasks</h1>
//                 ) : null}
//               </Card.Header>
//               <Card.Body>
//                 <p className="entityExplanation">
//                   Nunc lobortis dui sed justo mattis auctor. Praesent erat
//                   magna, finibus eu leo a, volutpat viverra risus. Aenean
//                   pellentesque interdum erat ut lacinia.
//                 </p>
//                 {objective ? (
//                   <>
//                   <h1 className="profileTitle">Involved Epics</h1>
//                   <ListGroup className="list-group-flush">
//                     <ListGroup.Item>
//                       <a href="/entityReport/Epic 1">
//                         <p className="qualityPStyle">Epics 1 58%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Epic 2">
//                         <p className="qualityPStyle">Epics 2 64%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Epic 3">
//                         <p className="qualityPStyle">Epics 3 82%</p>
//                       </a>
//                     </ListGroup.Item>
//                   </ListGroup>
//                   </>
//                 ) : null}
//                 {epic ? (
//                   <>
//                   <h1 className="profileTitle">Involved Features</h1>
//                   <ListGroup className="list-group-flush">
//                     <ListGroup.Item>
//                       <a href="/entityReport/Feature 1">
//                         <p className="qualityPStyle">Feature 1 58%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Feature 2">
//                         <p className="qualityPStyle">Feature 2 64%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Feature 3">
//                         <p className="qualityPStyle">Feature 3 82%</p>
//                       </a>
//                     </ListGroup.Item>
//                   </ListGroup>
//                   </>
//                 ) : null}
//                 {feature ? (
//                   <>
//                   <h1 className="profileTitle">Involved Stories</h1>
//                   <ListGroup className="list-group-flush">
//                     <ListGroup.Item>
//                       <a href="/entityReport/Story 1">
//                         <p className="qualityPStyle">Story 1 58%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Story 2">
//                         <p className="qualityPStyle">Story 2 64%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Story 3">
//                         <p className="qualityPStyle">Story 3 82%</p>
//                       </a>
//                     </ListGroup.Item>
//                   </ListGroup>
//                   </>
//                 ) : null}
//                 {story ? (
//                   <>
//                   <h1 className="profileTitle">Involved Tasks</h1>
//                   <ListGroup className="list-group-flush">
//                     <ListGroup.Item>
//                       <a href="/entityReport/Task 1">
//                         <p className="qualityPStyle">Task 1 58%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Task 2">
//                         <p className="qualityPStyle">Task 2 64%</p>
//                       </a>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <a href="/entityReport/Task 3">
//                         <p className="qualityPStyle">Task 3 82%</p>
//                       </a>
//                     </ListGroup.Item>
//                   </ListGroup>
//                   </>
//                 ) : null}
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col
//             lg={{ span: 1 }}
//             md={{ span: 1 }}
//             sm={{ span: 1 }}
//             xs={{ span: 1 }}
//           ></Col>
//         </Row>
//       </Container>
//       <div
//         style={{ justifyContent: "center", backgroundColor: "black" }}
//         className="footerLogoBox"
//       >
//         <svg width="50" height="50" className="logoSVG">
//           <g>
//             <title>background</title>
//             <rect fill="#000" height="50" width="50" y="-1" x="-1" />
//             <g
//               display="none"
//               overflow="visible"
//               y="0"
//               x="0"
//               height="100%"
//               width="100%"
//             >
//               <rect
//                 fill="url(#gridpattern)"
//                 strokeWidth="0"
//                 y="0"
//                 x="0"
//                 height="100%"
//                 width="100%"
//               />
//             </g>
//           </g>
//           <g>
//             <title>Layer 1</title>
//             <g stroke="null" id="svg_10">
//               <ellipse
//                 stroke="#b7aa7c"
//                 ry="3.20022"
//                 rx="3.20022"
//                 id="svg_1"
//                 cy="12.52605"
//                 cx="5.60831"
//                 fill="#fff"
//               />
//               <ellipse
//                 stroke="#b7aa7c"
//                 ry="4.51795"
//                 rx="4.51795"
//                 id="svg_2"
//                 cy="13.84378"
//                 cx="36.6505"
//                 fillOpacity="null"
//                 fill="#fff"
//               />
//               <ellipse
//                 stroke="#b7aa7c"
//                 ry="4.14146"
//                 rx="4.14146"
//                 id="svg_3"
//                 cy="42.11848"
//                 cx="17.65619"
//                 fillOpacity="null"
//                 strokeOpacity="null"
//                 fill="#fff"
//               />
//               <ellipse
//                 stroke="#b7aa7c"
//                 ry="5.5"
//                 rx="5.5"
//                 id="svg_4"
//                 cy="21"
//                 cx="21"
//                 fillOpacity="null"
//                 strokeOpacity="null"
//                 fill="#fff"
//               />
//               <line
//                 stroke="#b7aa7c"
//                 strokeLinecap="null"
//                 strokeLinejoin="null"
//                 id="svg_5"
//                 y2="19"
//                 x2="16"
//                 y1="14"
//                 x1="8"
//                 fillOpacity="null"
//                 strokeOpacity="null"
//                 fill="none"
//               />
//               <line
//                 stroke="#b7aa7c"
//                 strokeLinecap="null"
//                 strokeLinejoin="null"
//                 id="svg_7"
//                 y2="21"
//                 x2="26"
//                 y1="17"
//                 x1="33"
//                 fillOpacity="null"
//                 strokeOpacity="null"
//                 fill="none"
//               />
//               <line
//                 stroke="#b7aa7c"
//                 strokeLinecap="null"
//                 strokeLinejoin="null"
//                 id="svg_8"
//                 y2="26.14626"
//                 x2="19.78218"
//                 y1="37.91971"
//                 x1="18.10378"
//                 fillOpacity="null"
//                 strokeOpacity="null"
//                 fill="none"
//               />
//               <ellipse
//                 stroke="#ff3200"
//                 ry="2"
//                 rx="2"
//                 id="svg_9"
//                 cy="26"
//                 cx="26"
//                 fillOpacity="null"
//                 fill="#fff"
//               >
//                 <animateTransform
//                   attributeName="transform"
//                   dur="5s"
//                   type="rotate"
//                   from="0 21 21"
//                   to="360 21 21"
//                   repeatCount="indefinite"
//                 />
//               </ellipse>
//             </g>
//           </g>
//         </svg>
//         <p className="overallViewProductName">Natural Business Evolution</p>
//         <p className="overallViewProductNameMP">Measurable Progress</p>
//       </div>
//     </div>
//   );
// }