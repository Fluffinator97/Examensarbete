import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

function DoubleCircleDiagram() {

  //data for chart
const data = [
  { name: 'Work Left', value: Math.floor(Math.random() * 100)},
  { name: 'Work Done', value: Math.floor(Math.random() * 100) },
];

//picking color for chart
const COLORS = ['#f90909', '#4ad43d'];

const RADIAN = Math.PI / 180;
// making a custom label for the chart
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
      // rendering chart
      <ResponsiveContainer width="100%" height={250}>
      <PieChart >
        <Legend />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    );
  }

export default DoubleCircleDiagram;
