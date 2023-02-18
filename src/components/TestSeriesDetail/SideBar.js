import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const SideBar = ({ testSeries }) => {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const { addItem, items, emptyCart } = useCart();
  return (
    <>
      <div className="col-lg-4 col-12 order-lg-2 max-mb-50" id="sticky-sidebar">
        <div className="sidebar-widget-wrapper pr-0">
          <div className="sidebar-widget">
            <div className="sidebar-widget-content">
              <div className="sidebar-entry-course-info">
                <div className="course-price">
                  <span className="meta-label">
                    <i className="meta-icon far fa-money-bill-wave"></i>
                    Price
                  </span>
                  <span className="meta-value">
                    <span className="price">
                      {testSeries.price === 0 ? (
                        <> Free</>
                      ) : (
                        <>
                          ₹ {testSeries.price}{" "}
                          <span className="decimals-separator">.00</span>
                        </>
                      )}
                    </span>
                  </span>
                </div>
                <div className="course-meta">
                  <div className="course-duration">
                    <span className="meta-label">
                      <i className="far fa-clock"></i>
                      Duration
                    </span>
                    <span className="meta-value">{testSeries.days} Days</span>
                  </div>
                  <div className="course-lectures">
                    <span className="meta-label">
                      <i className="far fa-file-alt"></i>
                      Tests
                    </span>
                    <span className="meta-value">
                      {testSeries.tests.length}
                    </span>
                  </div>

                  <div className="course-students">
                    <span className="meta-label">
                      <i className="far fa-user-alt"></i>
                      Enrolled
                    </span>
                    <span className="meta-value">3423 students</span>
                  </div>
                  <div className="course-language">
                    <span className="meta-label">
                      <i className="far fa-language"></i>
                      Language
                    </span>
                    <span className="meta-value">English</span>
                  </div>
                </div>

                {/*   <div className="lp-course-buttons">
                  {/*   <button
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
                      setAdded(true);
                    }}
                    disabled={added ? true : false}
                  >
                    {added ? "Added to cart" : "Add to cart"}
                  </button> 
                </div> */}
                <div className="lp-course-buttons">
                  {/*    <button
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
                  >
                    Enroll
                  </button> */}

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
      </div>
    </>
  );
};

export default SideBar;
