import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "react-bootstrap/Table";
import TreeView from "@material-ui/lab/TreeView";
import { TreeItem } from "@material-ui/lab";

import "bootstrap/dist/css/bootstrap.min.css";

export default function OverallViewMetrics() {

  return (
    <div className="textAndGraphBindingBox">
      <Accordion>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          style={{ backgroundColor: "lightgrey" }}
        >
          Quality
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" style={{ backgroundColor: "white" }}>
          <List>
            <TreeView
              defaultCollapseIcon={<ExpandLessIcon />}
              defaultExpandIcon={<ExpandMoreIcon />}
            >
              <TreeItem nodeId="1" label="Number of Defects">
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
                    <tr>
                      <td>Customer</td>
                      <td>1</td>
                      <td>5</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Late</td>
                      <td>5</td>
                      <td>15</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>Early</td>
                      <td>25</td>
                      <td>50</td>
                      <td>100</td>
                    </tr>
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
                    <tr>
                      <td>Customer</td>
                      <td>5</td>
                      <td>3</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Late</td>
                      <td>3</td>
                      <td>2</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Early</td>
                      <td>10</td>
                      <td>8</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
            <ListItem>
              <ListItemText primary="Total Performed Tests/Defects 10%" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automated Tests 50%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="1"
          style={{ backgroundColor: "lightgrey" }}
        >
          Productivity
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" style={{ backgroundColor: "white" }}>
          <List>
            <TreeView
              defaultCollapseIcon={<ExpandLessIcon />}
              defaultExpandIcon={<ExpandMoreIcon />}
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
                    <tr>
                      <td>PI</td>
                      <td>2</td>
                      <td>20</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Sprint</td>
                      <td>1</td>
                      <td>13</td>
                      <td>50</td>
                    </tr>
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
                    <tr>
                      <td>PI</td>
                      <td>50</td>
                      <td>50</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Sprint</td>
                      <td>10</td>
                      <td>10</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="2"
          style={{ backgroundColor: "lightgrey" }}
        >
          Predictability
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" style={{ backgroundColor: "white" }}>
          <List>
            <ListItem>
              <ListItemText primary="Planned/Actual 80%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="3"
          style={{ backgroundColor: "lightgrey" }}
        >
          TTM
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <List>
            <TreeView
              defaultCollapseIcon={<ExpandLessIcon />}
              defaultExpandIcon={<ExpandMoreIcon />}
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
                    <tr>
                      <td>Epic</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Feature</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>Story</td>
                      <td>7</td>
                    </tr>
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
                    <tr>
                      <td>Epic</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Feature</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>Story</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </Table>
              </TreeItem>
            </TreeView>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="4"
          style={{ backgroundColor: "lightgrey" }}
        >
          ESI
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4" style={{ backgroundColor: "white" }}>
          <List>
            <ListItem>
              <ListItemText primary="Employee Satisfaction 60%" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Employee Engagement 70%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="5"
          style={{ backgroundColor: "lightgrey" }}
        >
          CSI
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <List>
            <ListItem>
              <ListItemText primary="Net Promoter Score 112" />
            </ListItem>
          </List>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}
