import React from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartReCharts(props) {
  return (
    <BarChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: props.top,
        right: props.right,
        left: props.left,
        bottom: props.bottom,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={props.xAxis} />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar
        dataKey={props.barKey}
        fill="#8884d8"
        background={{ fill: "#eee" }}
      />
    </BarChart>
  );
}
