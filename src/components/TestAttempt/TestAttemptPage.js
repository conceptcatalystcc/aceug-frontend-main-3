import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";
import AccordionItem from "./AccordionItem";
import ButtonStatusSideBar from "./ButtonStatusSideBar";
import CurrentQuestion from "./CurrentQuestion";

const TestAttemptLayout = ({ test }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerMap, setAnswerMap] = useState(new Map());

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

              <div className="accordion" id="accordionPanelsStayOpenExample">
                {test.sections.map((section, sectionIndex) => {
                  return (
                    <AccordionItem
                      section={section}
                      sectionIndex={sectionIndex}
                      setCurrentQuestion={setCurrentQuestionIndex}
                      setCurrentSection={setCurrentSectionIndex}
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
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex(currentQuestionIndex - 1);
                    } else if (
                      currentQuestionIndex == 0 &&
                      currentSectionIndex > 0
                    ) {
                      console.log(currentSectionIndex);
                      setCurrentSectionIndex(currentSectionIndex - 1);
                      console.log(currentSectionIndex);
                      setCurrentQuestionIndex(
                        test.sections[currentSectionIndex].questions.length - 1
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
                      test.sections[currentSectionIndex].questions[
                        currentQuestionIndex
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
                      currentQuestionIndex <
                      test.sections[currentSectionIndex].questions.length - 1
                    ) {
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } else if (currentSectionIndex < test.sections.length - 1) {
                      setCurrentSectionIndex(currentSectionIndex + 1);
                      setCurrentQuestionIndex(0);
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
                    test.sections[currentSectionIndex].questions[
                      currentQuestionIndex
                    ]
                  }
                  questionIndex={currentQuestionIndex}
                  sectionIndex={currentSectionIndex}
                  answerMap={answerMap}
                  setAnswerMap={setAnswerMap}
                />
              </div>

              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  id="clear"
                  onClick={() => {
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex(currentQuestionIndex - 1);
                    } else if (
                      currentQuestionIndex == 0 &&
                      currentSectionIndex > 0
                    ) {
                      setCurrentSectionIndex(currentSectionIndex - 1);
                      setCurrentQuestionIndex(
                        test.sections[currentSectionIndex].questions.length
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
                      test.sections[currentSectionIndex].questions[
                        currentQuestionIndex
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
                      currentQuestionIndex <
                      test.sections[currentSectionIndex].questions.length - 1
                    ) {
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } else if (currentSectionIndex < test.sections.length - 1) {
                      setCurrentSectionIndex(currentSectionIndex + 1);
                      setCurrentQuestionIndex(0);
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
                  <div>
                    <h4>Time Remaining: 20</h4>
                  </div>

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
                  <br />
                  <ButtonStatusSideBar
                    answerMap={answerMap}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setCurrentSectionIndex={setCurrentSectionIndex}
                    sections={test.sections}
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
