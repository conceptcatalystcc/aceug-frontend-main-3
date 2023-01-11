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
            return <li className={c}>{option.value}</li>;
          })}
        </ul>
      </li>
    </>
  );
};

export default QuestionReport;
