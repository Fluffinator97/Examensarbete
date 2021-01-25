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

function VelocityChart() {
  const data = [
    {
      name: "Vecka 1",
      Estimated: 50,
    },
    {
      name: "Vecka 2",
      Estimated: 40,
    },
    {
      name: "Vecka 3",
      Estimated: 60,
    },
    {
      name: "Vecka 4",
      Estimated: 70,
    },
    {
      name: "Vecka 5",
      Estimated: 85,
    },
    {
      name: "Vecka 6",
      Estimated: 60,
    },
    {
      name: "Vecka 7",
      Estimated: 75
    },
    {
      name: "Vecka 8",
      Estimated: 90
    },
    {
      name: "Vecka 9",
      Estimated: 90
    }, 
    {
      name: "Vecka 10",
      Estimated: 95
    }
  ];

  return (
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

export default VelocityChart;
