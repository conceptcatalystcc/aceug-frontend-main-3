import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";

const Report = ({ progress }) => {
  return (
    <div className="page-title-section section">
      <div className="page-title">
        <div className="container">
          <h1 className="title">{progress.test.name}</h1>
        </div>
      </div>
    </div>
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
