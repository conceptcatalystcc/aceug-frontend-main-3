import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useAuth } from "../../contexts/AuthContext";

import { baseURL } from "../../shared/baseUrl";

import auth from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

//Register user
const Step1 = ({ setStep, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aspired_college, setAspiredCollege] = useState("");
  const [aspired_degree, setAspiredDegree] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState();
  const [error, setError] = useState();

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
        setUser({
          name: name,
          phone: phone,
          email: email,
          aspired_college: aspired_college,
          aspired_degree: aspired_degree,
        });
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
            setUser(user);
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
      <div className="row ">
        <div className="col-lg-1"> </div>
        <div className="col-lg-10">
          <form action="" onSubmit={handleFormSubmit} className="checkout-form">
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
                    onChange={(e) => setAspiredCollege(e.target.value)}
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
              <input type="text" onChange={(e) => setOTP(e.target.value)} />
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
    </>
  );
};

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

  const [book, setBook] = useState({
    name: "The Fault In Our Stars",
    author: "John Green",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    price: 250,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_JK8jeq57vv45rz",
      amount: "10000",
      currency: "INR",
      name: book.name,
      description: "Test Transaction",
      image: book.img,
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
                  if (data.message === "Payment verified successfully") {
                    emptyCart();
                    //navigate("/student-dashboard");
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

          const { data } = await axios.post(
            orderUrl,
            { items: items },
            payloadHeader
          );
          console.log(data);
          initPayment(data);
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

              {currentUser ? (
                <Step3 />
              ) : (
                <Step1 setStep={setStep} setUser={setUser} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPageNew;
