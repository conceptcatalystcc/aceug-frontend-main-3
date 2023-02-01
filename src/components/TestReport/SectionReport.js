import React, { useEffect, useState } from "react";
import QuestionReport from "./QuestionReport";

const SectionReport = ({ section, answerMap }) => {
  const [questions, setQuestions] = useState(section.questions);

  return (
    <>
      <ol class="list-group list-group-numbered">
        {questions.map((question) => {
          return <QuestionReport question={question} answerMap={answerMap} />;
        })}
      </ol>
    </>
  );
};

export default SectionReport;
