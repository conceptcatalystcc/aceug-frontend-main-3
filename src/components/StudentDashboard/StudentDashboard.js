import React from "react";
import { Card, Title, Button, Metric } from "@tremor/react";
import { CourseProgressTile } from "./CourseProgressTile";
import { TestProgressTile } from "./TestProgressTile";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

export const StudentDashboard = () => {
  const { currentUser, updatecurrentUserProfile, setError } = useAuth();

  console.log(currentUser);

  const navigate = useNavigate();

  if (!currentUser) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1 className="text-center m-3 p-5">Student Dashboard</h1>
      <Button
        size="md"
        marginTop="mt-3"
        importance="primary"
        text="Play Quiz"
        className="center"
        handleClick={() => navigate("/quiz-game")}
      />
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
              text="Update Profile"
              handleClick={() => console.log("clicked")}
            />

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
            <div className="card p-5 m-2">
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
            </div>

            <div className="card p-5 m-2">
              <h4>Test Series in progress </h4>
              <div className=" row card-body align-left">
                {currentUser.series_enrolled.map((series, i) => {
                  return (
                    <div className="col-md-6">
                      <TestProgressTile key={i} series={series} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
