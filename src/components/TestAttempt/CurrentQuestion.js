import React, { useEffect } from "react";

const CurrentQuestion = ({ question, index, answerMap, setAnswerMap }) => {
  useEffect(() => {}, []);
  const handleOptionChange = (e) => {
    console.log("SetAnswer of Question ", index, "with ", e.target.value);
    let newAnswerMap = [...answerMap];
    newAnswerMap[index] = parseInt(e.target.value);
    setAnswerMap(newAnswerMap);
    console.log(newAnswerMap);
  };

  return (
    <>
      <b>
        <h4>
          Q {index + 1} <div dangerouslySetInnerHTML={{ __html: question.q }} />
        </h4>
      </b>
      {question.options.map((option, i) => {
        return (
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={"flexRadioDefault" + index}
              value={i}
              id={"flexRadioDefault" + "_" + i}
              onChange={handleOptionChange}
              checked={answerMap[index] == i ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={"flexRadioDefault" + "_" + i}
            >
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default CurrentQuestion;
