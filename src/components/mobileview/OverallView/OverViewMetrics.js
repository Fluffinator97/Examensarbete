import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

export default function OverallViewMetrics() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };

  return (
    <div className="textAndGraphBindingBox">
      <Accordion>
        <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: "lightgrey"}}>
          Quality
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" style={{ backgroundColor: "white"}}>
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Number of Defects" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table responsive>
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
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <Table responsive>
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
            </Collapse>
            <ListItem>
              <ListItemText primary="Total Performed Tests / Defects 10%" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automated Tests 50%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="1" style={{ backgroundColor: "lightgrey"}}>
          Productivity
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1"  style={{ backgroundColor: "white"}}>
          <List>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Number of Deliveries" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Table responsive>
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
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Delivered Story Points" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <Table responsive>
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
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="2" style={{ backgroundColor: "lightgrey"}}>
          Predictability
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2"  style={{ backgroundColor: "white"}}>
          <List>
            <ListItem>
              <ListItemText primary="Planned/Actual 80%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="3" style={{ backgroundColor: "lightgrey"}}>
          TTM
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <List>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Cycle Time" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List>
                <Table responsive>
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
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Lead Time" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <Table responsive>
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
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="4" style={{ backgroundColor: "lightgrey"}}>
          ESI
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4"  style={{ backgroundColor: "white"}}>
          <List>
            <ListItem>
              <ListItemText primary="Employee Satisfaction 60%" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Employee Engagement 70%" />
            </ListItem>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="5" style={{ backgroundColor: "lightgrey"}}>
          CSI 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <List>
            <ListItem >
              <ListItemText primary="Net Promoter Score 112" />
            </ListItem>
          </List>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}
