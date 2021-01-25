import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    Planned: 100,
    Actual: 90,
  },
  {
    name: "Page B",
    Planned: 80,
    Actual: 75,
  },
  {
    name: "Page C",
    Planned: 50,
    Actual: 40,
  },
  {
    name: "Page D",
    Planned: 100,
    Actual: 50,
  },
  {
    name: "Page E",
    Planned: 60,
    Actual: 30,
  },
  {
    name: "Page F",
    Planned: 55,
    Actual: 45,
  },
  {
    name: "Page G",
    Planned: 90,
    Actual: 80,
  }
];

function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
    <BarChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 3, right: 3, left: -29, bottom: 3 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Actual" fill="#8884d8" />
      <Bar dataKey="Planned" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart;
