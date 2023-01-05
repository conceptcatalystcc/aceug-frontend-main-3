import React from "react";

const AccordionItem = ({ section, sectionIndex, setCurrentQuestion }) => {
  return (
    <>
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={"panelsStayOpen-heading" + section._id}
        >
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#panelsStayOpen-collapse" + section._id}
            aria-expanded="true"
            aria-controls={"panelsStayOpen-collapse" + section._id}
          >
            {section.name}
          </button>
        </h2>
        <div
          id={"panelsStayOpen-collapse" + section._id}
          className="accordion-collapse collapse show"
          aria-labelledby={"panelsStayOpen-heading" + section._id}
        >
          <div className="accordion-body">
            <div className="list-group">
              {section.questions.map((question, questionIndex) => {
                return (
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    aria-current="true"
                    key={question._id}
                    onClick={() => {
                      setCurrentQuestion({
                        qIndex: questionIndex,
                        sIndex: sectionIndex,
                      });
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          "<b>Q" +
                          (questionIndex + 1) +
                          "</b>" +
                          question.statement,
                      }}
                    ></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
