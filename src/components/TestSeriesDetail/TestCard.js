import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const TestCard = ({ test, testSeries }) => {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const { addItem, items } = useCart();

  return (
    <>
      <div className="col-sm-4">
        <div className="card mx-2 my-2">
          {test.thumbnail ? (
            <img src="..." class="card-img-top" alt="..." />
          ) : (
            <></>
          )}

          <div className="card-body">
            <h5 className="card-title">{test.name}</h5>
            <div className="row">
              <div className="col-sm-6">Sections</div>
              <div className="col-sm-6" style={{ textAlign: "right" }}>
                <b>{test.sections.length}</b>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">Duration</div>
              <div className="col-sm-6" style={{ textAlign: "right" }}>
                <b>{test.sections.length}</b>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">Total Marks</div>
              <div className="col-sm-6" style={{ textAlign: "right" }}>
                <b>{test.sections.length}</b>
              </div>
            </div>
          </div>
          <div className="card-footer">
            {/*       <button
              className="btn btn-primary btn-hover-secondary btn-width-100"
              onClick={() => {
                if (!items.find((item) => item.id === testSeries._id))
                  addItem({
                    id: testSeries._id,
                    price: testSeries.price,
                    name: testSeries.name,
                    quantity: 1,
                    type: "Test Series",
                    subject: testSeries.subject,
                  });
                navigate("/checkout");
              }}
            > */}

            <button
              className="btn btn-primary btn-hover-secondary btn-width-100"
              onClick={() => {
                navigate("/test-attempt/" + testSeries.id + "/" + test._id);
              }}
            >
              Attempt Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                fill="white"
                height="24"
                className="mx-2"
              >
                <path d="M2 2.75A2.75 2.75 0 014.75 0h14.5a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V1.5H4.75c-.69 0-1.25.56-1.25 1.25v12.651A2.987 2.987 0 015 15h6.25a.75.75 0 010 1.5H5A1.5 1.5 0 003.5 18v1.25c0 .69.56 1.25 1.25 1.25h6a.75.75 0 010 1.5h-6A2.75 2.75 0 012 19.25V2.75z"></path>
                <path d="M15 14.5a3.5 3.5 0 117 0V16h.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0122.25 24h-7.5A1.75 1.75 0 0113 22.25v-4.5c0-.966.784-1.75 1.75-1.75H15zm3.5-2a2 2 0 00-2 2V16h4v-1.5a2 2 0 00-2-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
