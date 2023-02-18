import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Example = ({ progress }) => {
  const data02 = [
    {
      name: "Wrong",
      value: progress.wrong,
      fill: "#FF4500",
    },
    { name: "Correct", value: progress.correct, fill: "#228B22" },
    { name: "Unanswered", value: progress.unanswered, fill: "#4169E1" },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data02}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
