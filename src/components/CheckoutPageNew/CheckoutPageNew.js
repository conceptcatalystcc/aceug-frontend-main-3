import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useAuth } from "../../contexts/AuthContext";

import { baseURL } from "../../shared/baseUrl";

import auth from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

//Cart Display and Pay now
const Step3 = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, emptyCart } = useCart();
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  if (isEmpty) {
    return (
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title"> Your Cart is Empty</h1>
          </div>
        </div>
        <div className="page-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li key={"home"}>
                <a href="index.html">Home</a>
              </li>
              <li key={"checkout"} className="current">
                {" "}
                Checkout
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const initPayment = (data) => {
    const options = {
      key: "rzp_live_nmCvUPFvO74K1N",
      amount: "10000",
      currency: "INR",
      name: "AceUG",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          if (currentUser) {
            currentUser.getIdToken().then(async (token) => {
              const payloadHeader = {
                headers: {
                  Authorization: "Bearer " + token,
                },
              };

              const verifyUrl = baseURL + "payment/verify";
              await axios
                .post(verifyUrl, response, payloadHeader)
                .then((response) => response.data)
                .then((data) => {
                  console.log(data);
                  if (data === "Payment Verified Successfully") {
                    emptyCart();
                    navigate("/student-dashboard");
                  }
                });
              console.log(data);
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = baseURL + "payment/orders";

      if (currentUser) {
        currentUser.getIdToken().then(async (token) => {
          const payloadHeader = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };

          await axios
            .post(orderUrl, { items: items }, payloadHeader)
            .then((response) => response.data)
            .then((data) => {
              console.log(data);
              initPayment(data);
            })
            .catch((err) => {
              emptyCart();
              alert("Already Enrolled");
            });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row mt-50">
        <div className="col-lg-1"> </div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-12 max-mb-60">
              <div className="checkout-cart-total">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, itemIndex) => (
                      <tr>
                        <td>
                          <b>{itemIndex + 1}</b>
                        </td>
                        <td>
                          <b> {item.name} </b>
                          <br></br>
                          <span className="badge bg-primary">
                            {item.type}
                          </span>{" "}
                          <span className="badge bg-primary">
                            {item.subject}
                          </span>
                        </td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4>
                  Grand Total <span> {cartTotal}.00</span>
                </h4>
              </div>

              {/*        <div className="col-lg-12 col-12 max-mb-30 my-3">
                <div className="discount-coupon">
                  <form action="#">
                    <div className="row max-mb-n30">
                      <div className="col-md-6 col-12 max-mb-30">
                        <input type="text" placeholder="Coupon Code" />
                      </div>
                      <div className="col-md-6 col-12 max-mb-30">
                        <button className="btn btn-primary btn-hover-secondary">
                          Apply Code
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
 */}
              <div className="col-lg-12 col-12 max-mb-30 my-3">
                <div className="row max-mb-n30">
                  <div className="col-md-12 col-12 max-mb-30">
                    <button
                      className="btn btn-primary btn-hover-secondary"
                      style={{ width: "100%" }}
                      onClick={handlePayment}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"> </div>
      </div>
    </>
  );
};

const CheckOutPageNew = () => {
  const [step, setStep] = useState(1);
  const { currentUser } = useAuth();
  const { isEmpty, totalUniqueItems, items, cartTotal } = useCart();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  console.log(currentUser);

  if (isEmpty) {
    return (
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title"> Your Cart is Empty</h1>
          </div>
        </div>
        <div className="page-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current"> Checkout</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    navigate("/signup");
  }

  return (
    <>
      <div className="checkout-section section section-padding-bottom mt-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-1"> </div>
                <div className="col-lg-10">
                  <div className="gradation-title-wrapper">
                    <div
                      className="section-title text-left mb-0"
                      data-aos="fade-up"
                    >
                      <span className="sub-title">
                        <strong>Enrollment Progress</strong>
                      </span>
                      <h2 className="title">
                        You are just a step away from Success
                      </h2>
                    </div>

                    <div className="gradation-sub-heading" data-aos="fade-up">
                      <h3 className="heading">
                        <mark>0{step}</mark> Steps
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"> </div>
              </div>

              <Step3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPageNew;
