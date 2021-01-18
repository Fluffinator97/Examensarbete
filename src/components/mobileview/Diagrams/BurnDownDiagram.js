// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function BurnDownDiagram() {
//   const data = [
//     {
//       name: "Vecka 1",
//       Actual: 100,
//       Estimated: 100
//     },
//     {
//       name: "Vecka 2",
//       Actual: 95,
//       Estimated: 87.5
//     },
//     {
//       name: "Vecka 3",
//       Actual: 60,
//       Estimated: 75
//     },
//     {
//       name: "Vecka 4",
//       Actual: 55,
//       Estimated: 62.5
//     },
//     {
//       name: "Vecka 5",
//       Actual: 60,
//       Estimated: 50
//     },
//     {
//       name: "Vecka 6",
//       Actual: 40,
//       Estimated: 37.5
//     },
//     {
//       name: "Vecka 7",

//       Estimated: 25
//     },
//     {
//       name: "Vecka 8",

//       Estimated: 12.5
//     },
//     {
//       name: "Vecka 9",
  
//       Estimated: 0
//     }, 
//     {
//       name: "Vecka 10",

//       Estimated: 0
//     }

//   ];

//   return (
//     <ResponsiveContainer width="100%" height={250}>
//       <LineChart
//         width={200}
//         height={100}
//         data={data}
//         margin={{ top: 3, right: 3, left: -29, bottom: 3 }}
//       >
//         <CartesianGrid />
//         <XAxis dataKey="name" interval="preserveStartEnd" />
//         <YAxis interval="preserveStartEnd" />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="Estimated"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="Actual" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

// export default BurnDownDiagram;
