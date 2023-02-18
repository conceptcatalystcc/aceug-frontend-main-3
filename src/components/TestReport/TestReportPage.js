import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import Loader from "../Loader";
import SectionReport from "./SectionReport";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Example from "../StudentDashboard/Example";

const Report = ({ progress }) => {
  const [test, setTest] = useState();
  useEffect(() => {
    setTest(progress.test);
  }, []);

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const questions = progress.test.sections.reduce((all, section) => {
    return all.concat(section.questions);
  }, []);

  const filteredQuestions = questions.filter((question) => {
    if (filter === "all") {
      return true;
    }
    const answer = progress.answer_map.find(
      (answer) => answer.question.toString() === question._id.toString()
    );
    if (!answer) {
      return filter === "unanswered";
    }
    const correctOption = question.options.find((option) => option.correct);
    if (!correctOption) {
      return false;
    }
    return (
      (answer.selected_option.toString() === correctOption._id.toString() &&
        filter === "correct") ||
      (answer.selected_option.toString() !== correctOption._id.toString() &&
        filter === "wrong")
    );
  });

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">{progress.test.name}</h1>
          </div>
        </div>
      </div>

      <div className="section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Score</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">Correct</th>
                    <th scope="col">Wrong</th>
                    <th scope="col">Time Taken</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{progress.score}</td>
                    <td>
                      {(progress.correct /
                        (progress.correct + progress.wrong)) *
                        100}{" "}
                      %
                    </td>
                    <td>{progress.correct}</td>
                    <td>{progress.wrong}</td>
                    <td>{progress.time_taken}</td>
                  </tr>
                </tbody>
              </table>
              <h3>Your Performance</h3>

              <div className="row">
                <div className="col-sm-12">
                  <Form>
                    <FormGroup>
                      <Label for="filter" className="mr-sm-2">
                        Filter:
                      </Label>
                      <Input
                        type="select"
                        name="filter"
                        id="filter"
                        value={filter}
                        onChange={handleFilterChange}
                      >
                        <option value="all">All</option>
                        <option value="correct">Correct</option>
                        <option value="wrong">Wrong</option>
                        <option value="unanswered">Unanswered</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </div>
              </div>

              {filteredQuestions.map((question) => {
                const answer = progress.answer_map.find(
                  (answer) =>
                    answer.question.toString() === question._id.toString()
                );
                let attempted = "Unanswered";
                let attemptedClass = "bg-secondary";
                if (answer) {
                  const correctOption = question.options.find(
                    (option) => option.correct
                  );
                  if (
                    answer.selected_option.toString() ===
                    correctOption._id.toString()
                  ) {
                    attempted = "Correct";
                    attemptedClass = "bg-success";
                  } else {
                    attempted = "Incorrect";
                    attemptedClass = "bg-danger";
                  }
                }
                return (
                  <>
                    <li className="list-group-item ">
                      <div
                        dangerouslySetInnerHTML={{ __html: question.statement }}
                        className="fw-bold"
                      />
                      <span className={"badge " + attemptedClass}>
                        {attempted}
                      </span>

                      <ul className="list-group">
                        {question.options.map((option) => {
                          let optionClass = "list-group-item";
                          if (answer) {
                            if (
                              option._id.toString() ===
                              answer.selected_option.toString()
                            ) {
                              if (option.correct) {
                                optionClass =
                                  "list-group-item list-group-item-success";
                              } else {
                                optionClass =
                                  " list-group-item list-group-item-danger";
                              }
                            } else if (option.correct) {
                              optionClass =
                                "list-group-item list-group-item-success";
                            }
                          } else {
                            if (option.correct) {
                              optionClass =
                                "list-group-item list-group-item-success";
                            }
                          }

                          return (
                            <li className={optionClass}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: option.value,
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>

                      <div class="accordion-item mt-50">
                        <h2
                          class="accordion-header"
                          id={"panelsStayOpen-headingOne" + question._id}
                        >
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={
                              "#panelsStayOpen-collapseOne" + question._id
                            }
                            aria-expanded="true"
                            aria-controls={
                              "panelsStayOpen-collapseOne" + question._id
                            }
                          >
                            <b>See Explanation</b>
                          </button>
                        </h2>
                        <div
                          id={"panelsStayOpen-collapseOne" + question._id}
                          class="accordion-collapse collapse show"
                          aria-labelledby={
                            "panelsStayOpen-headingOne" + question._id
                          }
                        >
                          <div class="accordion-body">
                            <b>Explanation</b>
                            <br />
                            <br />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: question.explanation,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
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
