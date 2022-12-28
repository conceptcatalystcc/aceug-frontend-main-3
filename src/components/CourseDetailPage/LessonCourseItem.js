import React from "react";

const LessonCourseItem = ({ lesson }) => {
  return (
    <li className="course-item">
      <a className="section-item-link lesson" href="">
        <span className="item-name">{lesson.name}</span>
        <div className="course-item-meta">
          <span className="item-meta count-questions">Lesson</span>
          <span className="item-meta duration">
            {lesson.completion_time} min
          </span>
        </div>
      </a>
    </li>
  );
};

export default LessonCourseItem;
