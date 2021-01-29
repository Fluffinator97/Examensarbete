import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// data for chart
  const data = [
    {
      name: "Before agile",
      Estimated: 140,
    },
    {
      name: "Dec/Jan 2018/19",
      Estimated: 91,
    },
    {
      name: "April/May 19",
      Estimated: 63,
    },
    {
      name: "Sep 19",
      Estimated: 28,
    },
  ];

function LeadTimeChart() {
  return (
    // rendering chart
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 3, right: 3, left: -29, bottom: 3 }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Estimated"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LeadTimeChart;
