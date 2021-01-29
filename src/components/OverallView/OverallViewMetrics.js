import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import "bootstrap/dist/css/bootstrap.min.css";

import TableData from "../../context/data/TableData";

export default function OverallViewMetrics() {
  return (
    <div className="textAndGraphBindingBox">
      {/* Code for making an accordion(box with expandable boxes) */}
      <Accordion>
        {/* Toggles the specific accordion tab based on the eventKey */}
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="acordionToggleBackground"
        >
          Quality
        </Accordion.Toggle>
        {/* The content that is shown when the corresponding eventKey is toggled */}
        <Accordion.Collapse eventKey="0" className="acordionCollapseBackground">
          <>
            <TreeView
              defaultCollapseIcon={
                <FontAwesomeIcon icon={faArrowDown} size="3x" />
              }
              defaultExpandIcon={
                <FontAwesomeIcon icon={faArrowRight} size="3x" />
              }
            >
              <TreeItem nodeId="1" label="Number of Defects" onClick>
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>High</th>
                      <th>Medium</th>
                      <th>Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.NumberofDefects.map((metric) => (
                      <tr>
                        <td>{metric.Location}</td>
                        <td>{metric.High}</td>
                        <td>{metric.Medium}</td>
                        <td>{metric.Low}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
              <TreeItem nodeId="2" label="Average lead-time of defects">
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>High</th>
                      <th>Medium</th>
                      <th>Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.AverageLeadTime.map((metric) => (
                      <tr>
                        <td>{metric.Location}</td>
                        <td>{metric.High}</td>
                        <td>{metric.Medium}</td>
                        <td>{metric.Low}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
            <p className="globalP spacingP">
              Total Performed Tests/Defects: 10%
            </p>
            <p className="globalP removeMargin">Automated Tests: 50%</p>
          </>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="1"
          className="acordionToggleBackground"
        >
          Productivity
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" className="acordionCollapseBackground">
          <>
            <TreeView
              defaultCollapseIcon={
                <FontAwesomeIcon icon={faArrowDown} size="3x" />
              }
              defaultExpandIcon={
                <FontAwesomeIcon icon={faArrowRight} size="3x" />
              }
            >
              <TreeItem nodeId="3" label="Number of Deliveries">
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Epic</th>
                      <th>Feature</th>
                      <th>Story</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.NumberofDeliveries.map((metric) => (
                      <tr>
                        <td>{metric.Phase}</td>
                        <td>{metric.Epic}</td>
                        <td>{metric.Feature}</td>
                        <td>{metric.Story}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
              <TreeItem nodeId="4" label="Delivered Story Points">
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Epic</th>
                      <th>Feature</th>
                      <th>Story</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.DeliveredStoryPoints.map((metric) => (
                      <tr>
                        <td>{metric.Phase}</td>
                        <td>{metric.Epic}</td>
                        <td>{metric.Feature}</td>
                        <td>{metric.Story}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
          </>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="2"
          className="acordionToggleBackground"
        >
          Predictability
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" className="acordionCollapseBackground">
          <p className="globalP spacingP">Planned/Actual: 80%</p>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="3"
          className="acordionToggleBackground"
        >
          TTM
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3" className="acordionCollapseBackground">
          <>
            <TreeView
              defaultCollapseIcon={
                <FontAwesomeIcon icon={faArrowDown} size="3x" />
              }
              defaultExpandIcon={
                <FontAwesomeIcon icon={faArrowRight} size="3x" />
              }
            >
              <TreeItem nodeId="5" label="Cycle Time">
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Cycle Time</th>
                      <th>Nr. Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.CycleTime.map((metric) => (
                      <tr>
                        <td>{metric.CycleTime}</td>
                        <td>{metric.NrDays}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
              <TreeItem nodeId="6" label="Lead Time">
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Lead Time</th>
                      <th>Nr. Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.LeadTime.map((metric) => (
                      <tr>
                        <td>{metric.CycleTime}</td>
                        <td>{metric.NrDays}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
          </>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="4"
          className="acordionToggleBackground"
        >
          ESI
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4" className="acordionCollapseBackground">
          <>
            <p className="globalP" style={{ marginBottom: "5px" }}>
              Employee Satisfaction: 60%{" "}
            </p>
            <p className="globalP" style={{ margin: 0 }}>
              Employee Engagement: 70%{" "}
            </p>
          </>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="5"
          className="acordionToggleBackground"
        >
          CSI
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5" className="acordionCollapseBackground">
          <>
            <p className="globalP">Net Promoter Score: 112</p>
          </>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}
