// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { Switch, Route, useParams } from "react-router";

// import properMockData from "../context/data/properMockData";

// export default function Navigation() {
//   const path = window.location.pathname;
//   const { name } = useParams();

//   const [overallPage, setOverallPage] = useState(false);

// //   if (path === "/overall/metrics" && overallPage === false) {
// //     setOverallPage(true)
// //     console.log(overallPage)
// //   } else {
// //       setOverallPage(false)
// //       console.log(overallPage)
// // }


//   const goodNodes = properMockData.nodes.filter((node) => {
//     return node.group > 50;
//   });
//   const badNodes = properMockData.nodes.filter((node) => {
//     return node.group > 40 && node.group <= 50;
//   });
//   const reallyBadNodes = properMockData.nodes.filter((node) => {
//     return node.group <= 40;
//   });

//   const allNodes = properMockData.nodes.length;
//   const numberOfGoodNodes = (goodNodes.length / allNodes) * 100;
//   const numberOfBadNodes = (badNodes.length / allNodes) * 100;
//   const numberOfReallyBadNodes = (reallyBadNodes.length / allNodes) * 100;
//   const percentOfGoodNodes = numberOfGoodNodes.toFixed(2);
//   const percentOfBadNodes = numberOfBadNodes.toFixed(2);
//   const percentOfReallyBadNodes = numberOfReallyBadNodes.toFixed(2);

//   return (
//     <Container fluid>
//       <Row style={{ height: 30 }}></Row>
//       <Row
//         xl={{ cols: 12 }}
//         lg={{ cols: 12 }}
//         md={{ cols: 12 }}
//         sm={{ cols: 12 }}
//         xs={{ cols: 12 }}
//       >
//         <Col
//           lg={{ span: 1, offset: 1 }}
//           md={{ span: 1, offset: 1 }}
//           sm={{ span: 2 }}
//           xs={{ span: 2 }}
//         >
//           <a href={"/EnterpriseDataModel"} style={{ paddingLeft: "60%" }}>
//             <FontAwesomeIcon icon={faAngleLeft} size="3x" />
//           </a>
//         </Col>
//         <Col
//           lg={{ span: 8 }}
//           md={{ span: 6 }}
//           sm={{ span: 8 }}
//           xs={{ span: 8 }}
//           style={{ textAlign: "center" }}
//         >
//           <p className="overallViewTitle">Overall View</p>
//         </Col>
//         <Col
//           lg={{ span: 1 }}
//           md={{ span: 1 }}
//           sm={{ span: 2 }}
//           xs={{ span: 2 }}
//           style={{ padding: 0 }}
//         >
//           <a href={"/profile"}>
//             <FontAwesomeIcon icon={faAngleRight} size="3x" />
//           </a>
//         </Col>
//       </Row>
//       <Row
//         xl={{ cols: 12 }}
//         lg={{ cols: 12 }}
//         md={{ cols: 12 }}
//         sm={{ cols: 12 }}
//         xs={{ cols: 12 }}
//       >
//         <Col></Col>
//         <Col
//           lg={{ span: 8 }}
//           md={{ span: 8 }}
//           sm={{ span: 8 }}
//           xs={{ span: 8 }}
//           style={{ textAlign: "center" }}
//         >
//           <div className="">
//             {/* <p className=" overallViewStats ">Measurable Progress</p> */}
//             <p className=" overallViewStats ">Good {percentOfGoodNodes}%</p>
//             <p className=" overallViewStats yellowText ">
//               Risk {percentOfBadNodes}%
//             </p>
//             <p className=" overallViewStats redText ">
//               Alert {percentOfReallyBadNodes}%
//             </p>
//           </div>
//         </Col>
//         <Col></Col>
//       </Row>
//     </Container>
//   );
// }
