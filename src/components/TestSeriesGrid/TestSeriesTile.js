import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { baseDirectusURL } from "../../shared/baseUrl";

export const TestSeriesTile = ({ testSeries }) => {
  const url = "/test-series-detail/" + testSeries.id;
  console.log("Single", testSeries);
  const { items, emptyCart, addItem } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={url} className="image">
              <img
                src={baseDirectusURL + "assets/" + testSeries.poster}
                alt="Course Image"
                height={200}
              />
            </Link>
          </div>
          <div className="info">
            {testSeries.price === 0 || null ? (
              <span className="price p-5">Free</span>
            ) : (
              <span className="price p-5">₹{testSeries.price}</span>
            )}

            <span className="date">{testSeries.createdOn}</span>
            <h3 className="title" style={{ textAlign: "left" }}>
              <Link to={url}>{testSeries.name}</Link>
            </h3>

            <div className="lp-course-buttons mt-2">
              <button
                className="btn btn-primary btn-hover-secondary btn-width-100"
                onClick={() => {
                  items.pop();
                  addItem({
                    id: testSeries.id,
                    price: testSeries.price,
                    name: testSeries.name,
                    quantity: 1,
                    type: "Test Series",
                    subject: testSeries.subject,
                  });
                  navigate("/checkout");
                }}
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
