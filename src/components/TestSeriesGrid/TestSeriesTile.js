import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export const TestSeriesTile = ({ testSeries }) => {
  const url = "/test-series-detail/" + testSeries._id;

  const { items, emptyCart, addItem } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {/*    <div className="col max-mb-30">
        <div className="course-6">
          <div className="thumbnail">
            <a className="image" href="course-details-standard-sidebar.html">
              <img
                src="https://st2.depositphotos.com/4352269/11963/v/450/depositphotos_119637766-stock-illustration-online-test-exams-quiz-with.jpg"
                alt=""
              />
              <div className="course-overlay-bg"></div>
            </a>
          </div>
          <div className="info">
            <div className="course-caption-main">
              <span className="price">${testSeries.price}</span>
              <h3 className="title">
                <a href="course-details-standard-sidebar.html">
                  {testSeries.name}
                </a>
              </h3>
            </div>
            <div className="course-caption-collapse">
              <ul className="meta">
                <li>
                  <i className="far fa-file-alt"></i>20 Lessons
                </li>
                <li>
                  <i className="far fa-user-alt"></i>51 Students
                </li>
              </ul>
              <div className="desc">
                <div className="lp-course-buttons mt-2">
                  <button
                    className="btn btn-primary btn-hover-secondary btn-width-100"
                    onClick={() => {
                      items.pop();
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
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course-2">
          <div className="thumbnail">
            <Link to={url} className="image">
              <img src={testSeries.thumbnail} alt="Course Image" height={200} />
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
                    id: testSeries._id,
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
