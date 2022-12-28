import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Section } from "./Section";
import { Question } from "./Question";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";
import useUser from "../../Hooks/useUser";

export const TestAttemptPage = () => {
  const [test, setTest] = useState(null);

  const params = useParams();
  const testId = params.testId;

  useEffect(() => {
    axios
      .get(baseURL + "testeries/test/" + testId)
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

  const user = useUser();

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL + "testeries/test/" + testSeriesId)
      .then((response) => {
        setTests(response.data.test);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAgree = () => {
    setOpen(false);

    const data = {
      testeries: testSeriesId,
      test: testId,
      student: user._id,
      answer_map: answers,
    };

    axios
      .post(
        baseURL + "progress/saveprogress/" + testId + "/student/" + user._id,
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (test[0]) {
      setTimeLeft(test[0].duration * 60);
    }
  }, [test]);

  const [timeLeft, setTimeLeft] = useState(1800);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(); // Add a ref to store the interval id

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Add a listener to `timeLeft`
  useEffect(() => {
    setMinutes(Math.floor(timeLeft / 60));
    const min = Math.floor(timeLeft / 60);
    if (timeLeft <= 0) {
      handleCloseAgree();
    }
    setSeconds(Math.floor(timeLeft - min * 60));
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  const [currentQues, setCurrentQues] = useState({
    ques: "No question Selected",
    options: [],
  });
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);

  function onNextQues() {
    const currentQuesId = currentQues._id;

    let sectionIndex = -1;
    let questionIndex = -1;

    test[0].sections.map((test, i) => {
      test.questions.find((question, j) => {
        if (question._id === currentQuesId) {
          questionIndex = j;
          sectionIndex = i;
        }
      });
    });

    if (sectionIndex > -1 && questionIndex > -1) {
      if (test[0].sections[sectionIndex].questions.length > questionIndex + 1) {
        const nextQues =
          test[0].sections[sectionIndex].questions[questionIndex + 1];

        setCurrentQues(nextQues);
      } else {
        if (test[0].sections.length > sectionIndex + 1) {
          const nextQues = test[0].sections[sectionIndex + 1].questions[0];
          setCurrentQues(nextQues);
        } else {
          console.log("Quiz finished");
        }
      }
    }
  }

  function onPrevQues() {
    const currentQuesId = currentQues._id;

    let sectionIndex = -1;
    let questionIndex = -1;

    test[0].sections.map((test, i) => {
      test.questions.find((question, j) => {
        if (question._id === currentQuesId) {
          questionIndex = j;
          sectionIndex = i;
        }
      });
    });

    if (sectionIndex > -1 && questionIndex > -1) {
      if (questionIndex > 0) {
        const prevQues =
          test[0].sections[sectionIndex].questions[questionIndex - 1];
        setCurrentQues(prevQues);
      } else {
        if (sectionIndex > 0) {
          const element =
            test[0].sections[sectionIndex - 1].questions.length - 1;
          const prevQues =
            test[0].sections[sectionIndex - 1].questions[element];
          setCurrentQues(prevQues);
        } else {
          console.log("This is first ques");
        }
      }
    }
  }

  if (test.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="section section-padding-bottom">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="d-block d-lg-none d-xl-none mb-3">
            <h4 className="d-block d-lg-none d-xl-none">
              Time : {minutes}:{seconds}
            </h4>
            <Button onClick={handleClickOpen} variant="contained">
              Submit Test
            </Button>
          </div>

          <Section
            classes="col-md-3 d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"
            test={test}
            setCurrentQues={setCurrentQues}
            setOptions={setOptions}
          />

          <Question
            answers={answers}
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            onNextQues={onNextQues}
            onPrevQues={onPrevQues}
            setAnswers={setAnswers}
            options={options}
          />

          <Section
            classes="mt-5 d-block d-lg-none d-md-block d-xl-none"
            test={test}
            setCurrentQues={setCurrentQues}
            setOptions={setOptions}
          />

          <div className="col-md-3 d-none d-lg-block">
            <h4>
              Time : {minutes}:{seconds}
            </h4>
            <Button onClick={handleClickOpen} variant="contained">
              Submit Test
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to submit the test?"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleCloseAgree} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            <br />
            <br />
            <div className=" card p-3">
              <div role="group" aria-label="First group">
                {test[0].sections.map((test, i) => {
                  return (
                    <div key={i}>
                      <h5>Section {i + 1}</h5>

                      {test.questions.map((question, j) => {
                        let found = answers.find((q) => q.id === question._id);

                        if (found != null) {
                          return (
                            <button
                              type="button"
                              key={j}
                              id={"button-" + question._id}
                              style={{
                                backgroundColor: "limegreen",
                                color: "white",
                              }}
                              className="btn btn-outline-secondary p-3 m-2"
                            >
                              {j + 1}
                            </button>
                          );
                        }

                        return (
                          <button
                            type="button"
                            key={j}
                            id={"button-" + question._id}
                            className="btn btn-outline-secondary p-3 m-2"
                          >
                            {j + 1}
                          </button>
                        );
                      })}
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
