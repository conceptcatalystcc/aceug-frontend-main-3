import React from "react";

const StatusButton = ({
  section,
  sectionIndex,
  setCurrentSectionIndex,
  setCurrentQuestionIndex,
  answerMap,
}) => {
  return (
    <div>
      {section.questions.map((question, questionIndex) => {
        if (answerMap.get(question._id)) {
          return (
            <button
              type="button"
              className="btn btn-success btn-floating mx-2 my-2 btn-xs"
              onClick={(e) => {
                e.preventDefault();
                setCurrentQuestionIndex(questionIndex);
                setCurrentSectionIndex(sectionIndex);
              }}
            >
              {questionIndex + 1}
            </button>
          );
        }
        return (
          <button
            type="button"
            className="btn btn-outline-primary btn-floating mx-2 my-2 btn-xs"
            onClick={(e) => {
              e.preventDefault();
              setCurrentQuestionIndex(questionIndex);
              setCurrentSectionIndex(sectionIndex);
            }}
          >
            {questionIndex + 1}
          </button>
        );
      })}
    </div>
  );
};

export default StatusButton;
