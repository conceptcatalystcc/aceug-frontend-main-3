import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import Razorpay from "../CheckOut/Razorpay";

const SideBarDirect = ({ course }) => {
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);

  function onEnrollClick() {
    navigate("/checkout?courseId=" + course._id);
  }

  function addToCart() {
    if (localStorage.getItem("cart")) {
      let cart1 = JSON.parse(localStorage.getItem("cart"));
      const cart = cart1;
      cart.push({ courseId: course._id });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cart = [{ courseId: course._id }];
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(JSON.parse(localStorage.getItem("cart")));
    }
  }
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
                      ₹ {course.price}
                      <span className="decimals-separator">.00</span>
                    </span>
                  </span>
                </div>
                <div className="course-meta">
                  <div className="course-duration">
                    <span className="meta-label">
                      <i className="far fa-clock"></i>
                      Duration
                    </span>
                    <span className="meta-value">{course.duration} weeks</span>
                  </div>
                  <div className="course-lectures">
                    <span className="meta-label">
                      <i className="far fa-file-alt"></i>
                      Lectures
                    </span>
                    <span className="meta-value">{course.lectures}</span>
                  </div>

                  <div className="course-students">
                    <span className="meta-label">
                      <i className="far fa-user-alt"></i>
                      Enrolled
                    </span>
                    <span className="meta-value">
                      {course.enrolled} students
                    </span>
                  </div>
                  <div className="course-language">
                    <span className="meta-label">
                      <i className="far fa-language"></i>
                      Language
                    </span>
                    <span className="meta-value">{course.language}</span>
                  </div>
                </div>

                <div className="lp-course-buttons">
                  <button
                    className="btn btn-primary btn-hover-secondary btn-width-100"
                    onClick={() => {
                      items.pop();
                      addItem({
                        id: course._id,
                        price: course.price,
                        name: course.name,
                        quantity: 1,
                        type: "Course",
                        subject: course.subject,
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

export default SideBarDirect;
