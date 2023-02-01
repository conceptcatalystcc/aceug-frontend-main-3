import React, { useEffect, useState } from "react";
import { Card, Title, Button, Metric } from "@tremor/react";
import { CourseProgressTile } from "./CourseProgressTile";
import { TestProgressTile } from "./TestProgressTile";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";

export const StudentDashboard = () => {
  const { currentUser } = useAuth();
  const [testSeriesEnrollments, setTestSeriesEnrollments] = useState();

  useEffect(() => {
    currentUser &&
      currentUser.getIdToken().then((token) => {
        const payloadHeader = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        axios
          .get(baseURL + "student/testSeriesEnrolled", payloadHeader)
          .then((response) => response.data)
          .then((enrollments) => {
            console.log(enrollments);
            setTestSeriesEnrollments(enrollments);
          })
          .catch((err) => console.log(err));
      });
  }, []);

  if (!currentUser) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1 className="text-center m-3 p-5">Student Dashboard</h1>

      <div className="row">
        <div className="col-3 mt-2">
          <Card maxWidth="max-w-lg">
            <Metric>
              Hi, {currentUser ? currentUser.name : "No currentUser"}
            </Metric>

            <hr />
            <Title>Welcome Back !!!</Title>
          </Card>

          <div className="text-center center">
            <Button
              size="md"
              marginTop="mt-3"
              importance="primary"
              text="LogOut"
              handleClick={() => localStorage.clear()}
            />
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {/*   <div className="card p-5 m-2">
              <h4> Courses in progress </h4>
              <div className=" row card-body align-left">
                {currentUser.courses_enrolled.map((course, i) => {
                  return (
                    <div className="col-md-6">
                      <CourseProgressTile key={i} course={course} />
                    </div>
                  );
                })}
              </div>
            </div> */}

            <div className="card p-5 m-2">
              <h4>Test Series in progress </h4>
              <div className=" row card-body align-left">
                <div className="col-md-12">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    {testSeriesEnrollments &&
                      testSeriesEnrollments.map((enrollment) => {
                        console.log(enrollment);
                        return (
                          <TestProgressTile
                            testSeries={enrollment.testseries}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
