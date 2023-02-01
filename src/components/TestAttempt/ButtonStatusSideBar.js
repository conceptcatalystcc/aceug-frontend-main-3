import React from "react";
import StatusButton from "./StatusButton";

const ButtonStatusSideBar = ({ sections, answerMap, setCurrentQuestion }) => {
  return (
    <div>
      <center>
        {sections.map((section, sectionIndex) => {
          return (
            <>
              <h4>{section.name}</h4>
              <StatusButton
                section={section}
                sectionIndex={sectionIndex}
                setCurrentQuestion={setCurrentQuestion}
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
