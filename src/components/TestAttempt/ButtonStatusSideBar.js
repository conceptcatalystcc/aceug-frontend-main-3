import React from "react";

const ButtonStatusSideBar = ({ answerMap, setCurrentQuestion }) => {
  return (
    <div>
      {answerMap.map((answer, index) => {
        if (answer == -1) {
          return (
            <button
              type="button"
              className="btn btn-outline-secondary btn-floating mx-2 my-2"
              onClick={(e) => {
                e.preventDefault();
                setCurrentQuestion(index);
              }}
            >
              {index + 1}
            </button>
          );
        } else if (answer > -1) {
          return (
            <button
              type="button"
              className="btn btn-success btn-floating mx-2 my-2"
              onClick={(e) => {
                e.preventDefault();
                setCurrentQuestion(index);
              }}
            >
              {index + 1}
            </button>
          );
        }
      })}
    </div>
  );
};

export default ButtonStatusSideBar;
