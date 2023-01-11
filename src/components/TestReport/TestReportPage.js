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

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h3>Topper's List</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">All India Rank</th>
                    <th scope="col">Student</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-9">
              <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart>
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
