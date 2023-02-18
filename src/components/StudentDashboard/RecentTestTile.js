import React from "react";

import Example from "./Example";

const RecentTestTile = ({ progress }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Test - {progress.test.name}</h5>
            <p className="card-title">
              Attempted At -{" "}
              {new Date(progress.createdAt).toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </p>

            <b>Score: {progress.score}</b>
            <br />
            <b>Accuracy: {progress.correct}</b>

            <Example progress={progress} />

            <a
              href={"/test-report/" + progress._id}
              className="btn btn-primary w-100"
            >
              View Full Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTestTile;
