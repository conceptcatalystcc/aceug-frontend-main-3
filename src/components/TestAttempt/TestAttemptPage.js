import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { baseURL } from "../../shared/baseUrl";
import Login from "../Authentication/Login";
import LoginPhone from "../Authentication/LoginPhone";
import Loader from "../Loader";
import AccordionItem from "./AccordionItem";
import ButtonStatusSideBar from "./ButtonStatusSideBar";
import CurrentQuestion from "./CurrentQuestion";

const TestAttemptLayout = ({ test, testSeriesId }) => {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [askSubmit, setAskSubmit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentQuestion, setCurrentQuestion] = useState({
    qIndex: 0,
    sIndex: 0,
  });

  const [answerMap, setAnswerMap] = useState(new Map());

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const askToSubmit = () => {
    setAskSubmit(true);
  };

  const calculateScore = () => {
    var score = 0;
    var correct = 0;
    var wrong = 0;
    return new Promise((resolve, reject) => {
      for (var i = 0; i < answerMap.length; i++) {
        if (answerMap[i] === -1) {
          continue;
        } else if (answerMap[i] === test.questions[i].correct) {
          score = score + 2;
          correct += 1;
        } else {
          score = score - 0.66;
          wrong += 1;
        }
      }

      if (i === answerMap.length) {
        resolve([score, wrong, correct]);
      }
    });
  };

  const submitTest = () => {
    setIsSubmitting(true);

    if (currentUser) {
      currentUser.getIdToken().then((token) => {
        const payloadHeader = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        const url =
          baseURL + "testseries/submit-test/" + testSeriesId + "/" + test._id;
        let answerArray = Array.from(answerMap, (item) => ({
          question: [item[0]],
          selected_option: item[1],
        }));

        axios
          .post(
            url,
            { answer_map: answerArray, score: 20, time: 353 },
            payloadHeader
          )
          .then((response) => response.data)
          .then((progress) => {
            setIsSubmitting(false);
            console.log(progress._id);
            navigate("/test-report/" + progress._id);
          });
      });
    }
  };

  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <>
      <section className="section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3  d-none d-lg-block d-md-block d-sm-none d-xs-none">
              <h4>Questions</h4>

              <div className="accordion" id="accordionPanelsStayOpenExample">
                {test.sections.map((section, sectionIndex) => {
                  return (
                    <AccordionItem
                      section={section}
                      sectionIndex={sectionIndex}
                      setCurrentQuestion={setCurrentQuestion}
                    />
                  );
                })}
              </div>
            </div>

            <div className="col-sm-6">
              <div>
                <center>
                  {" "}
                  <h3> {test.name}</h3>
                </center>
                <button
                  className="btn btn-outline-primary btn-sm"
                  id="clear"
                  onClick={() => {
                    if (currentQuestion.qIndex > 0) {
                      console.log("First");
                      const newCurrentQuestion = {
                        ...currentQuestion,
                        qIndex: currentQuestion.qIndex - 1,
                      };
                      setCurrentQuestion(newCurrentQuestion);
                    } else if (
                      currentQuestion.qIndex == 0 &&
                      currentQuestion.sIndex > 0
                    ) {
                      console.log("Second");
                      const newCurrentQuestion = {
                        qIndex:
                          test.sections[currentQuestion.sIndex - 1].questions
                            .length - 1,
                        sIndex: currentQuestion.sIndex - 1,
                      };
                      setCurrentQuestion(newCurrentQuestion);
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-danger mx-2  btn-sm"
                  id="clear"
                  onClick={() => {
                    let newAnswerMap = new Map(answerMap);
                    newAnswerMap.delete(
                      test.sections[currentQuestion.sIndex].questions[
                        currentQuestion.qIndex
                      ]._id
                    );
                    setAnswerMap(newAnswerMap);
                  }}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success ml-2  btn-sm"
                  id="next"
                  onClick={() => {
                    if (
                      currentQuestion.qIndex <
                      test.sections[currentQuestion.sIndex].questions.length - 1
                    ) {
                      const newCurrentQuestion = {
                        ...currentQuestion,
                        qIndex: currentQuestion.qIndex + 1,
                      };
                      setCurrentQuestion(newCurrentQuestion);
                    } else if (
                      currentQuestion.sIndex <
                      test.sections.length - 1
                    ) {
                      const newCurrentQuestion = {
                        qIndex: 0,
                        sIndex: currentQuestion.sIndex + 1,
                      };
                      setCurrentQuestion(newCurrentQuestion);
                    }
                  }}
                >
                  Next
                </button>
              </div>
              <br />

              <div>
                <CurrentQuestion
                  question={
                    test.sections[currentQuestion.sIndex].questions[
                      currentQuestion.qIndex
                    ]
                  }
                  questionIndex={currentQuestion.qIndex}
                  sectionIndex={currentQuestion.sIndex}
                  answerMap={answerMap}
                  setAnswerMap={setAnswerMap}
                />
              </div>

              {/*    <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  id="clear"
                  onClick={() => {
                    if (currentQuestion.qIndex > 0) {
                      console.log("First");
                      setcurrentQuestion.qIndex(currentQuestion.qIndex - 1);
                    } else if (
                      currentQuestion.qIndex == 0 &&
                      currentQuestion.sIndex > 0
                    ) {
                      console.log("Second");
                      setcurrentQuestion.sIndex(currentQuestion.sIndex - 1);
                      setcurrentQuestion.qIndex(
                        test.sections[currentQuestion.sIndex].questions.length
                      );
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-danger mx-2  btn-sm"
                  id="clear"
                  onClick={() => {
                    let newAnswerMap = new Map(answerMap);
                    newAnswerMap.delete(
                      test.sections[currentQuestion.sIndex].questions[
                        currentQuestion.qIndex
                      ]._id
                    );
                    setAnswerMap(newAnswerMap);
                  }}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success ml-2  btn-sm"
                  id="next"
                  onClick={() => {
                    if (
                      currentQuestion.qIndex <
                      test.sections[currentQuestion.sIndex].questions.length - 1
                    ) {
                      setcurrentQuestion.qIndex(currentQuestion.qIndex + 1);
                    } else if (
                      currentQuestion.sIndex <
                      test.sections.length - 1
                    ) {
                      setcurrentQuestion.sIndex(currentQuestion.sIndex + 1);
                      setcurrentQuestion.qIndex(0);
                    }
                  }}
                >
                  Next
                </button>
              </div> */}
            </div>

            <div className="col-sm-3">
              <div id="status">
                <center>
                  <div>
                    <h4>Time Remaining: 20</h4>
                  </div>

                  <button
                    className="btn btn-success"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                    id="msub"
                    onClick={() => {
                      askToSubmit();
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Submitting...</span>
                      </div>
                    ) : (
                      "Submit Test"
                    )}
                  </button>

                  <br />
                  <br />
                  <ButtonStatusSideBar
                    answerMap={answerMap}
                    setCurrentQuestion={setCurrentQuestion}
                    sections={test.sections}
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

      {askSubmit ? (
        <div id="max-popup" class="max-popup-section section">
          <div class="max-popup-dialog animated fadeInUp">
            <button
              class="max-popup-close"
              onClick={() => {
                setAskSubmit(false);
              }}
            >
              <i class="fal fa-times"></i>
            </button>
            <div class="max-popup-dialog-inner">
              <div class="row">
                <div class="col-md-12 col-12 align-self-center">
                  <div class="freecourse-popup-content">
                    <h6 class="sub-title">
                      Once submitted, you will not be able to edit your answers
                    </h6>
                    <h2 class="title">
                      Are you sure you want to Submit the Test?
                    </h2>
                  </div>

                  <center>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Attempted Questions</th>
                          <th scope="col">Time Left</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{answerMap.size}</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </table>{" "}
                    <button
                      className="btn btn-success mx-2  btn-sm"
                      onClick={() => {
                        submitTest();
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-danger mx-2  btn-sm"
                      onClick={() => {
                        setAskSubmit(false);
                      }}
                    >
                      No
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

const Error = ({ error }) => {
  return (
    <>
      <div className="section">
        <div className="container">{error}</div>
      </div>
    </>
  );
};

const TestAttemptPage = () => {
  const [test, setTest] = useState();
  const [error, setError] = useState();

  const params = useParams();
  const testId = params.testId;
  const testSeriesId = params.testSeriesId;

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
          .get(
            baseURL + "testseries/test/" + testSeriesId + "/" + testId,
            payloadHeader
          )
          .then((data) => data.data)
          .then((test) => {
            setTest(test);
          })
          .catch((err) => console.log(err));
      });
  }, []);

  if (!currentUser) {
    return <LoginPhone />;
  }

  if (!test) {
    return <Loader />;
  }

  if (!currentUser) {
    return <Loader />;
  }

  return <TestAttemptLayout test={test} testSeriesId={testSeriesId} />;
};

export default TestAttemptPage;
