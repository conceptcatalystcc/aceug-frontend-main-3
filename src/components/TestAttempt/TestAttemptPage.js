import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";
import ButtonStatusSideBar from "./ButtonStatusSideBar";
import CurrentQuestion from "./CurrentQuestion";

const TestAttemptLayout = ({ test }) => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [answerMap, setAnswerMap] = useState();

  const [timer, setTimer] = useState(test.questions.length * 2 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const submitTest = () => {
    setIsSubmitting(true);
    const url = baseURL + "submit-test/" + test._id;
    console.log(url);
    axios
      .post(url, { answers: answerMap })
      .then((response) => response.data)
      .then((report) => {
        navigate("/report/" + report._id);
      });
  };

  return (
    <>
      <section className="section mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3  d-none d-lg-block d-md-block d-sm-none d-xs-none">
              <h4>Questions</h4>

              <div className="list-group">
                {test.questions.map((question, index) => {
                  return (
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentQuestion(index);
                      }}
                    >
                      <b>Q {index + 1}. </b>
                      <div dangerouslySetInnerHTML={{ __html: question.q }} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="col-sm-6">
              <div>
                <button
                  className="btn btn-outline-primary"
                  id="clear"
                  onClick={() => {
                    if (currentQuestion > 0) {
                      setCurrentQuestion(currentQuestion - 1);
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-danger mx-2"
                  id="clear"
                  onClick={() => {
                    let newAnswerMap = [...answerMap];
                    newAnswerMap[currentQuestion] = -1;
                    setAnswerMap(newAnswerMap);
                  }}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success ml-2"
                  id="next"
                  onClick={() => {
                    if (currentQuestion < test.questions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    }
                  }}
                >
                  Next
                </button>
              </div>
              <br />
              <div>
                <CurrentQuestion
                  question={test.questions[currentQuestion]}
                  index={currentQuestion}
                  answerMap={answerMap}
                  setAnswerMap={setAnswerMap}
                />
              </div>

              <div>
                <button
                  className="btn btn-outline-primary"
                  id="clear"
                  onClick={() => {
                    if (currentQuestion > 0) {
                      setCurrentQuestion(currentQuestion - 1);
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-danger mx-2"
                  id="clear"
                  onClick={() => {
                    let newAnswerMap = [...answerMap];
                    newAnswerMap[currentQuestion] = -1;
                    setAnswerMap(newAnswerMap);
                  }}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success ml-2"
                  id="next"
                  onClick={() => {
                    if (currentQuestion < test.questions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="col-sm-3">
              <div id="status">
                <center>
                  <div>Time Remaining: {timer}</div>

                  <button
                    className="btn btn-success"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                    id="msub"
                    onClick={() => {
                      submitTest();
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
                  <ButtonStatusSideBar
                    answerMap={answerMap}
                    setCurrentQuestion={setCurrentQuestion}
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TestAttemptPage = () => {
  const [test, setTest] = useState(null);

  const params = useParams();
  const testId = params.testId;

  useEffect(() => {
    axios
      .get(baseURL + "testseries/test/" + testId)
      .then((data) => data.data)
      .then((test) => {
        setTest(test);
        console.log(test);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!test) {
    return <Loader />;
  }

  return <TestAttemptLayout test={test} />;
};

export default TestAttemptPage;
