import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";
import SectionReport from "./SectionReport";
import { LineChart, Line } from "recharts";

const Report = ({ progress }) => {
  const [test, setTest] = useState();
  useEffect(() => {
    setTest(progress.test);
  }, []);

  const data = [{ uv: 400 }, { uv: 350 }, { uv: 200 }];

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">{progress.test.name}</h1>
          </div>
        </div>
      </div>

      <div className="section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Score</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">Correct</th>
                    <th scope="col">Wrong</th>
                    <th scope="col">Time Taken</th>
                    <th scope="col">Avg Time / Question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>23</td>
                    <td>45 %</td>
                    <td>13</td>
                    <td>8</td>
                    <td>34</td>
                    <td>2.8</td>
                  </tr>
                </tbody>
              </table>
              <h3>Your Performance</h3>
              {test &&
                test.sections.map((section) => {
                  return (
                    <SectionReport
                      section={section}
                      answerMap={progress.answer_map}
                    />
                  );
                })}
            </div>

            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const TestReportPage = () => {
  const [progress, setProgress] = useState(null);

  const params = useParams();
  const progressId = params.testProgressId;

  useEffect(() => {
    axios
      .get(baseURL + "testseries/test-report/" + progressId)
      .then((data) => data.data)
      .then((progress) => {
        console.log(progress);
        setProgress(progress);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!progress) {
    return <Loader />;
  }

  return <Report progress={progress} />;
};

export default TestReportPage;
