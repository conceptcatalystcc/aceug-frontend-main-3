import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../shared/baseUrl";
import { TestSeriesTile } from "./TestSeriesTile";

export const TestSeriesGridPage = () => {
  const [testSeries, setTestSeries] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get(baseURL + "items/testSeries/")
      .then((data) => data.data)
      .then((testSeries) => {
        console.log("Test Series", testSeries);
        setTestSeries(testSeries.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">TestSeries</h1>
          </div>
        </div>
      </div>

      <div className="section section-padding-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center max-mb-20">
            <div className="col-sm-auto col-12 max-mb-10">
              <p className="result-count">
                We found <span>{testSeries.length}</span> testSeries available
                for you
              </p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
            {testSeries.map((testSeries, i) => (
              <TestSeriesTile key={i} testSeries={testSeries} />
            ))}
          </div>

          <div className="row max-mt-50">
            <div className="col text-center">
              <button
                onClick={() => {
                  setPage(page + 2);
                }}
                className="btn btn-outline-primary load-more-btn"
              >
                Load More <i className="fal fa-redo ms-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
