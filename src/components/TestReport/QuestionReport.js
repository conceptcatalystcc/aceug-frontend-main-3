import React from "react";
import { useState, useEffect } from "react";

const QuestionReport = ({ question, answerMap }) => {
  const [selected, setSelected] = useState();
  useEffect(() => {
    const answer = answerMap.find((answer) => answer.question === question._id);
    if (typeof answer !== "undefined") {
      setSelected(answer.selected_option);
    }
  }, []);

  return (
    <>
      <li className="list-group-item ">
        <div class="accordion" id="accordionPanelsStayOpenExample"></div>
        <div
          dangerouslySetInnerHTML={{ __html: question.statement }}
          className="fw-bold"
        />

        {selected ? (
          selected === question.options.find((option) => option.correct)._id ? (
            <span class="badge bg-success"> You solved this correctly</span>
          ) : (
            <span class="badge bg-danger">
              {" "}
              You did not solve this correctly
            </span>
          )
        ) : (
          <span class="badge bg-secondary">
            {" "}
            You did not attempt this question
          </span>
        )}
        {/* "list-group-item list-group-item-danger" */}
        <ul className="list-group">
          {question.options.map((option) => {
            var c = "list-group-item";

            if (option.correct) {
              c = c + " list-group-item-success";
            }

            if (selected === option._id && !option.correct) {
              c = c + " list-group-item-danger";
            }
            return (
              <li className={c}>
                <div dangerouslySetInnerHTML={{ __html: option.value }} />
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
              data-bs-target={"#panelsStayOpen-collapseOne" + question._id}
              aria-expanded="true"
              aria-controls={"panelsStayOpen-collapseOne" + question._id}
            >
              <b>See Explanation</b>
            </button>
          </h2>
          <div
            id={"panelsStayOpen-collapseOne" + question._id}
            class="accordion-collapse collapse show"
            aria-labelledby={"panelsStayOpen-headingOne" + question._id}
          >
            <div class="accordion-body">
              <div
                dangerouslySetInnerHTML={{ __html: question.explanation }}
                className="fw-bold"
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default QuestionReport;
