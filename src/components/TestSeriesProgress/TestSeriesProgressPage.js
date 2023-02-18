import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import TestChart from "./TestCard";
import RecentTestTile from "../StudentDashboard/RecentTestTile";

const TestSeriesProgressPage = ({ testSeries, progresses }) => {
  const testDictionary = progresses.reduce((acc, cur) => {
    const { test } = cur;
    if (acc[test._id]) {
      acc[test._id].push(cur);
    } else {
      acc[test._id] = [cur];
    }
    return acc;
  }, {});

  const navigate = useNavigate();

  return (
    <>
      <div className="section mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1"
              >
                <Row>
                  <Col sm={3}>
                    <h1 className="title">{testSeries.name}</h1>
                    <ListGroup as="ol" numbered>
                      {testSeries.tests.map((test) => {
                        return (
                          <ListGroup.Item
                            action
                            href={"#" + test._id}
                            className="d-flex justify-content-between align-items-start"
                            as="li"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold"> {test.name}</div>
                            </div>

                            {testDictionary[test._id] ? (
                              <span className="badge bg-success">
                                Attempted
                              </span>
                            ) : (
                              <span className="badge bg-secondary">
                                Not Attempted
                              </span>
                            )}
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      {testSeries.tests.map((test) => {
                        if (!testDictionary[test._id]) {
                          return (
                            <Tab.Pane eventKey={"#" + test._id}>
                              {" "}
                              <center>
                                <h5>You have not attempted this test yet.</h5>

                                <button
                                  className="btn btn-primary btn-hover-secondary btn-width-100"
                                  onClick={() => {
                                    navigate(
                                      "/test-attempt/" +
                                        testSeries._id +
                                        "/" +
                                        test._id
                                    );
                                  }}
                                >
                                  Attempt Now{" "}
                                </button>
                              </center>
                            </Tab.Pane>
                          );
                        } else {
                          return (
                            <Tab.Pane eventKey={"#" + test._id}>
                              <TestChart
                                progresses={testDictionary[test._id]}
                              />
                              <h2>Past Reports</h2>
                              <div className="row">
                                {testDictionary[test._id]
                                  .reverse()
                                  .map((progressTest) => {
                                    return (
                                      <div className="col-sm-4 mt-25">
                                        <RecentTestTile
                                          progress={progressTest}
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </Tab.Pane>
                          );
                        }
                      })}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Middle = () => {
  const [testSeries, setTestSeries] = useState();
  const [progresses, setProgresses] = useState();

  const params = useParams();
  const id = params.testSeriesId;

  useEffect(() => {
    const url = baseURL + "testseries/singletestseries/" + id;
    axios
      .get(url)
      .then((response) => response.data)
      .then((fetchedTestSeries) => {
        setTestSeries(fetchedTestSeries);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const url = baseURL + "testseries/test-series-progress/" + id;

    axios
      .get(url)
      .then((response) => response.data)
      .then((fetchedProgress) => {
        setProgresses(fetchedProgress);
      })
      .catch((err) => console.log(err));
  }, []);

  if (testSeries && progresses) {
    return (
      <TestSeriesProgressPage testSeries={testSeries} progresses={progresses} />
    );
  }

  return <Loader />;
};

export default Middle;
