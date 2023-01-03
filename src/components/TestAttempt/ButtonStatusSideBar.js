import React from "react";
import StatusButton from "./StatusButton";

const ButtonStatusSideBar = ({
  sections,
  answerMap,
  setCurrentQuestionIndex,
  setCurrentSectionIndex,
}) => {
  return (
    <div>
      <center>
        {sections.map((section, sectionIndex) => {
          return (
            <>
              <h4>Section {sectionIndex + 1}</h4>
              <StatusButton
                section={section}
                sectionIndex={sectionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setCurrentSectionIndex={setCurrentSectionIndex}
                answerMap={answerMap}
              />
            </>
          );
        })}
      </center>
    </div>
  );
};

export default ButtonStatusSideBar;
