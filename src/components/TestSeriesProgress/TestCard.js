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

const TestChart = ({ progresses }) => {
  progresses = progresses.sort((a, b) => {
    return new Date(a.updatedAt) - new Date(b.updatedAt);
  });

  // create data array for recharts
  const data = progresses.map((progress) => ({
    score: progress.score,
    accuracy: (progress.correct / (progress.correct + progress.wrong)) * 100,
    updatedAt: new Date(progress.updatedAt).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }),
  }));

  return (
    <>
      <h2> Overall Performance</h2>
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis dataKey="updatedAt" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line type="monotone" dataKey="score" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-sm-6">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis dataKey="updatedAt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="accuracy" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TestChart;
