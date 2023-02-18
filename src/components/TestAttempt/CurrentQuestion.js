import React, { useEffect } from "react";

const CurrentQuestion = ({
  question,
  questionIndex,
  sectionIndex,
  answerMap,
  setAnswerMap,
}) => {
  return (
    <>
      <div>
        <b>
          <p className="text-sm ">
            {" "}
            Section {sectionIndex + 1} - Question {questionIndex + 1}{" "}
          </p>
          <h5>
            <div dangerouslySetInnerHTML={{ __html: question.statement }} />
          </h5>
        </b>
        {question.options.map((option, i) => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={"flexRadioDefault" + question._id}
                value={i}
                id={"flexRadioDefault" + option._id}
                onChange={() => {
                  var newAnswerMap = new Map(answerMap);
                  newAnswerMap.set(question._id, option._id);
                  console.log(newAnswerMap);
                  setAnswerMap(newAnswerMap);
                }}
                checked={
                  answerMap.get(question._id) === option._id ? true : false
                }
              />
              <label
                className="form-check-label"
                htmlFor={"flexRadioDefault" + option._id}
              >
                <div dangerouslySetInnerHTML={{ __html: option.value }} />
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrentQuestion;
