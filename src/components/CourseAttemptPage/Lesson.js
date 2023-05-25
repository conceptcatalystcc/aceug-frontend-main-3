import React from "react";

const Lesson = ({ lesson }) => {
  console.log("Lesson", lesson);
  return <p>{lesson.text}</p>;
};

export default Lesson;
