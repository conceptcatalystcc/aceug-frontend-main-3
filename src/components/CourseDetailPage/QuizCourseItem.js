import React from "react";

const QuizCourseItem = ({ quiz }) => {
  return (
    <li className="course-item">
      <a className="section-item-link" href="">
        <span className="item-name">{quiz.name}</span>
        <div className="course-item-meta">
          <span className="item-meta count-questions">Quiz</span>
          <span className="item-meta duration">{quiz.completion_time} min</span>
        </div>
      </a>
    </li>
  );
};

export default QuizCourseItem;
