import React, { useState } from "react";

import { Button } from "@tremor/react";

export const TestProgressTile = ({ testSeries }) => {
  const [currentLesson, setCurrentLesson] = useState(14);
  const [totalLesson, setTotalLesson] = useState(16);

  return (
    <>
      <div class="col">
        <div class="card">
          <p class="card-header">Featured</p>
          <div class="card-body">
            <h5 class="card-title">{testSeries.name}</h5>

            <a href="#" class="btn btn-primary">
              See All Tests
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
