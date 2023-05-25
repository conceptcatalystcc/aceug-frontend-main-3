import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { baseURL } from "../../shared/baseUrl";
import LoginPhone from "../Authentication/LoginPhone";
import Loader from "../Loader";
import Lesson from "./Lesson";
import Video from "./Video";

const CourseAttemptLayout = ({ course }) => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceSelect = (resource) => {
    setSelectedResource(resource);
  };

  return (
    <>
      <div className="section mt-50">
        <div className="container">
          <div className="row" style={{ display: "flex", height: "100vh" }}>
            <div
              className="col-md-4"
              style={{
                height: "100%",
                overflowY: "scroll",
              }}
            >
              {course &&
                course.modules.map((module) => (
                  <div key={module._id}>
                    <h3>{module.name}</h3>

                    <ol class="list-group list-group-numbered">
                      {module.resources.map((resource) => (
                        <li
                          className="list-group-item list-group-item-action"
                          key={resource._id}
                          onClick={() => handleResourceSelect(resource)}
                        >
                          {resource.name}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
            </div>

            <div className="col-md-8">
              {selectedResource && (
                <div>
                  {selectedResource.resourceType === "Video" && (
                    <Video video={selectedResource.video} />
                  )}
                  {selectedResource.resourceType === "Lesson" && (
                    <div>
                      <Lesson lesson={selectedResource.lesson} />
                    </div>
                  )}
                  {selectedResource.resourceType === "Quiz" && (
                    <div>
                      <h3>{selectedResource.quiz.name}</h3>
                      <p>{selectedResource.quiz.instructions}</p>
                      <ul>
                        {selectedResource.quiz.questions.map((question) => (
                          <li key={question._id}>
                            <p>{question.text}</p>
                            <ul>
                              {question.options.map((option) => (
                                <li key={option._id}>
                                  <label>
                                    <input
                                      type="radio"
                                      name={question._id}
                                      value={option._id}
                                    />
                                    {option.text}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CourseAttemptPage = () => {
  const [course, setCourse] = useState();
  const [error, setError] = useState();

  const params = useParams();
  const courseId = params.courseId;

  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser &&
      currentUser.getIdToken().then((token) => {
        const payloadHeader = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        axios
          .get(baseURL + "courses/attempt/" + courseId, payloadHeader)
          .then((data) => data.data)
          .then((test) => {
            setCourse(test);
          })
          .catch((err) => console.log(err));
      });
  }, []);

  if (!currentUser) {
    return <LoginPhone />;
  }

  if (!course) {
    return <Loader />;
  }

  return <CourseAttemptLayout course={course} />;
};
export default CourseAttemptPage;
