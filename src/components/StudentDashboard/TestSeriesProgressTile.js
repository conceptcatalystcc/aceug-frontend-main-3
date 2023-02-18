import React, { useEffect, useState } from "react";

import { Button } from "@tremor/react";

export const TestProgressTile = ({ enrollment }) => {
  const [unique, setUnique] = useState(new Set());
  useEffect(() => {
    if (enrollment) {
      let uniqueSet = new Set(
        enrollment.test_progress.map((item) => item.test)
      );
      setUnique(uniqueSet);
    }
  });
  return (
    <>
      <div className="col-12">
        <div className="card">
          <p className="card-header">Enrolled In</p>
          <div className="card-body">
            <h5 className="card-title">
              {enrollment ? enrollment.testseries.name : <></>}
            </h5>
            <b>Total Tests - </b> {enrollment.testseries.tests.length}
            <br />
            <b>Attempted Tests - </b> {unique.size}
            <a
              href={"/test-series-progress/" + enrollment.testseries._id}
              className="btn btn-primary w-100"
            >
              See All Tests
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
