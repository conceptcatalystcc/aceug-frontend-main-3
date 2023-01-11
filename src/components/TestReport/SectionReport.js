import React from "react";
import QuestionReport from "./QuestionReport";

const SectionReport = ({ section, answerMap }) => {
  return (
    <>
      <ol class="list-group list-group-numbered">
        {section.questions.map((question) => {
          return <QuestionReport question={question} answerMap={answerMap} />;
        })}
      </ol>
    </>
  );
};

export default SectionReport;
