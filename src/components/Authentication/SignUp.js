import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import React, { useEffect, useState } from "react";

import { baseURL } from "../../shared/baseUrl";

import auth from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Modal from "react-bootstrap/Modal";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aspired_college, setAspiredCollege] = useState("");
  const [aspired_degree, setAspiredDegree] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sendotp",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  }, []);

  const sendOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91" + phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        window.confirmationResult = confirmationResult;
        setShow(true);
        // ...
      })
      .catch((error) => {
        //setError("Invalid OTP Entered");
      });
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        auth.currentUser = user;

        axios
          .post(baseURL + "student/register", {
            name: name,
            email: email,
            phone: phone,
            aspired_college: aspired_college,
            aspired_degree: aspired_degree,
            uid: user.uid,
          })
          .then((response) => response.data)
          .then((data) => {
            navigate("/checkout");
          });

        // ...
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    sendOTP();
  }

  return (
    <>
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
                        <h2 className="title">
                          You are just a step away from Success
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1"> </div>
                </div>

                <div className="row ">
                  <div className="col-lg-1"> </div>
                  <div className="col-lg-10">
                    <h1>Register</h1>
                    <form
                      action=""
                      onSubmit={handleFormSubmit}
                      className="checkout-form"
                    >
                      <div id="billing-form">
                        <div className="row mt-50">
                          <div className="col-md-6 col-12 ">
                            <label>Full Name*</label>
                            <input
                              type="text"
                              placeholder="Your Name"
                              required
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6 col-12 ">
                            <label>Email Address*</label>
                            <input
                              type="email"
                              placeholder="Email Address"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-md-6 col-12 ">
                            <label>Phone no*</label>
                            <input
                              type="number"
                              step={1}
                              placeholder="Phone number"
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-md-6 col-12 ">
                            <label>Aspired Degree*</label>
                            <select
                              onChange={(e) => setAspiredDegree(e.target.value)}
                              required
                            >
                              <option>B.A.</option>
                              <option>B.Com</option>
                              <option>B.Pharma</option>
                              <option>B.Tech</option>
                              <option>Others</option>
                            </select>
                          </div>

                          <div className="col-md-12 col-12 ">
                            <label>Aspired College*</label>
                            <select
                              onChange={(e) =>
                                setAspiredCollege(e.target.value)
                              }
                              required
                            >
                              <option>Bangladesh</option>
                              <option>China</option>
                              <option>country</option>
                              <option>India</option>
                              <option>Japan</option>
                            </select>
                          </div>

                          <div className="col-md-12 col-12 ">
                            <button
                              className="btn btn-primary btn-hover-secondary btn-width-100 mt-40"
                              id="sendotp"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-1"> </div>
                </div>

                <Modal
                  show={show}
                  onHide={handleClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Enter the OTP</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {" "}
                    <div className="row">
                      {/*     <div className="col-md-2 col-2 ">
              <input type="text" autoFocus={true} />
            </div>
            <div className="col-md-2 col-2 ">
              <input type="text" />
            </div>
            <div className="col-md-2 col-2 ">
              <input type="text" />
            </div>
            <div className="col-md-2 col-2 ">
              <input type="text" />
            </div>
            <div className="col-md-2 col-2 ">
              <input type="text" />
            </div>
            <div className="col-md-2 col-2 ">
              <input type="text" />
            </div> */}

                      <div className="col-md-12 col-12 ">
                        <input
                          type="text"
                          onChange={(e) => setOTP(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12 col-12 ">
                        <button
                          onClick={verifyOTP}
                          className="btn btn-primary btn-hover-secondary btn-width-100 mt-40"
                        >
                          Verify and Continue
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
