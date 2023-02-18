import React, { useEffect, useState } from "react";
import { TestProgressTile } from "./TestSeriesProgressTile";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";
import RecentTestTile from "./RecentTestTile";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const StudentDashboard = () => {
  const { currentUser } = useAuth();
  const [testSeriesEnrollments, setTestSeriesEnrollments] = useState();
  const [testProgresses, setTestProgresses] = useState();
  const [profile, setProfile] = useState();
  const [show, setShow] = useState(false);
  const { logout } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    currentUser &&
      currentUser.getIdToken().then((token) => {
        const payloadHeader = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        axios
          .get(baseURL + "student/recent-tests", payloadHeader)
          .then((response) => response.data)
          .then((progresses) => {
            console.log(progresses);
            setTestProgresses(progresses);
          })
          .catch((err) => console.log(err));
      });
  }, []);

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

  useEffect(() => {
    currentUser &&
      currentUser.getIdToken().then((token) => {
        const payloadHeader = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        axios
          .get(baseURL + "student/profile", payloadHeader)
          .then((response) => response.data)
          .then((profile) => {
            console.log(profile);
            setProfile(profile);
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
        <div className="col-sm-3 mt-2">
          <Card>
            <Card.Body>
              <Card.Title>Hello, {profile ? profile.name : <></>}</Card.Title>

              <Card.Text>
                Your Doubt Credits -{" "}
                <b>{profile ? profile.doubt_points : <></>} </b>
              </Card.Text>

              <Button variant="danger" onClick={handleShow}>
                Logout
              </Button>
            </Card.Body>
          </Card>

          <h4 className="mt-50">Test Series in progress </h4>
          {testSeriesEnrollments &&
            testSeriesEnrollments.map((enrollment) => {
              return <TestProgressTile enrollment={enrollment} />;
            })}
        </div>
        <div className="col-sm-9">
          <div className="row">
            <div className="card p-5 m-2">
              <h4>Recently Attempted Tests </h4>
              <div className=" row card-body align-left">
                <div className="col-md-12">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {testProgresses &&
                      testProgresses
                        .slice(-3)
                        .reverse()
                        .map((progress) => {
                          return <RecentTestTile progress={progress} />;
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to Logout?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
