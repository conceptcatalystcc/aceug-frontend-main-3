import axios from "axios";
import React from "react";
import { baseURL } from "../../shared/baseUrl";

const CourseLP2 = () => {
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_2JdNJK8OObQHqG",
      amount: "10000",
      currency: "INR",
      name: "AceUG",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        console.log("Response", response);
        try {
          const verifyUrl = baseURL + "payment/verify";
          await axios
            .post(verifyUrl, response)
            .then((response) => response.data)
            .then((data) => {
              console.log(data);
              if (data === "Payment Verified Successfully") {
                alert("Payment Verified");
              }
            });
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

      await axios
        .post(orderUrl, { uuid: "abcdefgh" })
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          initPayment(data);
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {/* Mobile Section  */}
      <div
        className="section d-block d-md-none"
        style={{ backgroundColor: "#302B62" }}
      >
        <div className="container">
          <div className="row mt-50">
            <br />
            <br />
            <br />
            <center>
              <h1 style={{ color: "#EADB5B" }}>
                CRACK CUET IN 90 DAYS WITH ACE-UG
              </h1>
            </center>
            <div className="col-sm-6">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/Dx9bRbhT3SE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ border: "5px solid #EADB5B" }}
              ></iframe>
              <h6 className="text-center text-white">
                A course that will completely change your relationship with
                time. Through LIVE classes and recorded content, understand how
                to stop procrastinating and win your day.
              </h6>
              <br />

              <a
                onClick={handlePayment}
                style={{
                  backgroundColor: "#EADB5B",
                  color: "#302B62",
                  borderRadius: "12px 12px 12px 12px",
                }}
                className="text-center"
              >
                <h3 className="mt-25">
                  {" "}
                  Get LIFETIME Unlimited Access to this course{" "}
                </h3>
                <h6 className="mb-25">
                  Now For
                  <span className="text-decoration-line-through">
                    {" "}
                    ₹9,999
                  </span>{" "}
                  ₹1,499 Only
                </h6>
              </a>

              <h6 className="text-white text-center mt-25">
                14 Days Money Guarantee
              </h6>

              <div className="row">
                <div className="col-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">16 Hours</h4>
                  <p className="text-white mb-50">
                    Focused, Actionable Content
                  </p>
                </div>
                <div className="col-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">16 Hours</h4>
                  <p className="text-white">Focused, Actionable Content</p>
                </div>
              </div>

              <div className="row mb-50">
                <div className="col-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">16 Hours</h4>
                  <p className="text-white">Focused, Actionable Content</p>
                </div>
                <div className="col-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">16 Hours</h4>
                  <p className="text-white">Focused, Actionable Content</p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-center text-white mt-50 mb-50 d-none d-md-block">
            An action packed course, filled with frameworks and mental models
            that will help you{" "}
            <span style={{ color: "#EADB5B" }}>launch your dream start-up</span>{" "}
            🚀 in 8 Fool-Proof Steps. Trust me it works!
          </h4>
        </div>
      </div>
      {/* Desktop Section  */}
      <div
        className="section d-none d-md-block"
        style={{ backgroundColor: "#302B62" }}
      >
        <div className="container">
          <div className="row mt-50">
            <br />
            <br />
            <br />
            <center>
              <h1 style={{ color: "#EADB5B" }}>
                CRACK CUET IN 90 DAYS WITH ACE-UG
              </h1>
            </center>
            <div className="col-sm-6">
              <h5 className="text-center text-white">
                <p> Are you ready to take your CUET Exam?</p>

                <p>
                  If so, then this is the course for you. You can learn
                  everything with this course in just a few weeks! With our
                  step-by-step approach, we'll walk you through each topic in
                  detail so that when it comes time to take the exam, you'll be
                  confident in your ability to pass..
                </p>

                <p></p>
              </h5>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">180+ Hours Lectures</h4>
                  <p className="text-white mb-50">Video Lectures</p>
                </div>
                <div className="col-sm-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">
                    10 Full Length and 40 Topic Wise Mock Tests{" "}
                  </h4>
                  <p className="text-white mb-50">
                    Test Your Knowledge Instantly
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">50 Doubt Credits</h4>
                  <p className="text-white">
                    Ask Your Doubts and get personal mentoring{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="84"
                      fill="#302B62"
                      class="bi bi-card-list"
                      viewBox="0 0 16 16"
                      style={{
                        backgroundColor: "#EADB5B",
                        padding: "25px 25px 25px 25px",
                        borderRadius: "8px 8px 8px 8px",
                      }}
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <br />
                  <br />
                  <h4 className="text-white">Lifetime Access</h4>
                  <p className="text-white">Learn at your own pace</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Dx9bRbhT3SE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ border: "5px solid #EADB5B" }}
              ></iframe>
              <br />
              <br />
              <a
                onClick={handlePayment}
                style={{
                  backgroundColor: "#EADB5B",
                  color: "#302B62",
                  borderRadius: "12px 12px 12px 12px",
                }}
                className="text-center"
              >
                <h3 className="mt-25">
                  {" "}
                  Get LIFETIME Unlimited Access to this course{" "}
                </h3>
                <h6 className="mb-25">
                  Now For
                  <span className="text-decoration-line-through">
                    {" "}
                    ₹9,999
                  </span>{" "}
                  ₹1,499 Only
                </h6>
              </a>

              <h6 className="text-white text-center mt-25">
                14 Days Money Guarantee
              </h6>
            </div>
          </div>

          <h4 className="text-center text-white mt-50 mb-50">
            An action packed course, filled with lectures and quizzes that will
            help you{" "}
            <span style={{ color: "#EADB5B" }}>
              get admission into top central universities
            </span>{" "}
            🚀 in 90 days. Trust me it works!
          </h4>
        </div>
      </div>
      <div className="section">
        <div className="container mt-50 mb-50">
          <h1 className="text-center">Contents of this 4 Module Course</h1>{" "}
          <div className="row">
            <div className="col-sm-6">
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: "20px 20px 20px 20px",
                  margin: "20px 20px 20px 20px",
                }}
              >
                <h5>Language</h5>
                <p>In the preparation of cuet language is an integral part.</p>

                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        {" "}
                        Get 50 Hours of learning for English language for the
                        preparation of CUET 2023
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Learn with Shubhankar Sir AIR -1 JNU Entrance Test
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>Complete Notes of language</td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        15 topic wise test and 10 complete mock tests of English
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get the learning outcome and compare your score with
                        others.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: "20px 20px 20px 20px",
                  margin: "20px 20px 20px 20px",
                }}
              >
                <h5>Quantitative Aptitude With Venkatesh Sir</h5>
                <p>
                  Learn Quants for CUET 2023 with best tricks and Techniques
                  with Venkatesh Sir. Secure your seat in DU with ACE-UG
                </p>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>40 + hours of learning through recorded videos</td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        18 + TopicWise Mock Tests and 10 Full Length Mock Test
                        with Explanation
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get your learning curve and compare your progress with
                        others
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get the Exclusive facility of Asking Doubts with
                        Doubt_on_Chat facility
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: "20px 20px 20px 20px",
                  margin: "20px 20px 20px 20px",
                }}
              >
                <h5>Logical Reasoning by Ambuj Sir</h5>
                <p>
                  Learn Logical Reasoning for CUET 2023 with best tricks and
                  Techniques with Ambuj Sir.
                </p>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>40 + hours of learning through recorded videos</td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        18 + TopicWise Mock Tests and 10 Full Length Mock Test
                        with Explanation
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get your learning curve and compare your progress with
                        others
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get the Exclusive facility of Asking Doubts with
                        Doubt_on_Chat facility
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>Get the complete notes of Logical Reasoning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: "20px 20px 20px 20px",
                  margin: "20px 20px 20px 20px",
                }}
              >
                <h5>GK and Current Affairs</h5>
                <p>
                  Learn GK and Current Affairs for CUET 2023 with best tricks
                  and Techniques.
                </p>
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>60 + hours of learning through recorded videos</td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        19 + TopicWise Mock Tests and 10 Full Length Mock Test
                        with Explanation
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get your learning curve and compare your progress with
                        others
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get the updated Current Affairs compendium and Live
                        Classes on YouTube
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ff"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </td>
                      <td>
                        Get the Exclusive facility of Asking Doubts with
                        Doubt_on_Chat facility
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <a
            onClick={handlePayment}
            style={{
              backgroundColor: "#EADB5B",
              color: "#302B62",
              borderRadius: "12px 12px 12px 12px",
              width: "100%",
            }}
            className="text-center"
          >
            <h3 className="mt-25">
              {" "}
              Get LIFETIME Unlimited Access to this course{" "}
            </h3>
            <h6 className="mb-25">
              Now For
              <span className="text-decoration-line-through"> ₹9,999</span>{" "}
              ₹1,499 Only
            </h6>
          </a>
          <br />
          <h5 className="text-center mt-25">* 14 Days Money Back Guarantee</h5>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#FFFEF3" }}>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {" "}
            <div className="container mt-50 mb-50">
              <center>
                <p>Meet Your Coach, Guide, and Mentor</p>
                <h1>Anupam Dubey</h1>
                <h6>
                  Anupam Sir has 12 Years of Experience. He started his career
                  as an Assistant SAT teacher. He also contributed to the growth
                  of class 12 students in his next phase of his career. He has
                  been a part of Teach India, A CSR initiative of Times Of
                  India.
                </h6>
              </center>
              <br />
              <div className="row">
                <div className="col-sm-4">
                  <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ankur-1.png" />
                </div>
                <div className="col-sm-8">
                  <p>
                    For the past 6 years he is completely into competitive
                    entrance exams. He has a very strong grip over English
                    grammar. He has mentored more than 10000 students so far in
                    online and offline mode. As far as CUET is concerned he has
                    been a pioneer name in that and has contributed a great
                    result in all the top colleges of Delhi University or other
                    Top central universities. If you are learning from Anupam
                    Sir, one thing will be sure that you will not face any
                    problem in the English Grammar section.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-8">
                  <p>
                    I attribute much of these experiences to how I run my day,
                    every day. While most of us feel lost and feel like we are
                    wasting time, I have, over the past 20 years, built a
                    wonderful relationship with time.
                  </p>
                </div>
                <div className="col-sm-4">
                  <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ankur2.jpg" />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <p>
                    Every single day, I am able to: 1. Meditate 2. Read books 3.
                    Practice singing 4. Work out 5. Write a blog 6. Create
                    videos for YouTube and Instagram 7. Connect with founders 8.
                    Spend time with 18-30yr olds, sharing my experience with
                    them 9. Speak at leading events and organisations 10.
                    Conduct online courses
                  </p>
                </div>
              </div>

              <br />
              <center>
                {" "}
                <h4>
                  In this course, I share how I look at the time, manage it and
                  help you do the same.
                </h4>
                <a
                  href="https://rzp.io/l/NK1DYRG"
                  style={{
                    backgroundColor: "#EADB5B",
                    color: "#302B62",
                    borderRadius: "12px 12px 12px 12px",
                    width: "100%",
                  }}
                  className="text-center"
                >
                  <h3 className="mt-25">
                    {" "}
                    Get LIFETIME Unlimited Access to this course{" "}
                  </h3>
                  <h6 className="mb-25">
                    Now For
                    <span className="text-decoration-line-through">
                      {" "}
                      ₹9,999
                    </span>{" "}
                    ₹1,499 Only
                  </h6>
                </a>
                <br />
                <br />
              </center>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#FFFEF3" }}>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {" "}
            <div className="container mt-50 mb-50">
              <center>
                <h1>Who You Should Take This Course?</h1>
                <div className="row">
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <center>
                      <img src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/04/ceo-1.png" />
                      <h3>Entrepreneurs</h3>
                    </center>

                    <p>
                      Being an entrepreneur means that you are constantly
                      firefighting. This course will help you separate important
                      from the urgent so that you can build a business that is
                      profitable and makes a real impact.
                    </p>
                  </div>
                </div>

                <a
                  href="https://rzp.io/l/NK1DYRG"
                  style={{
                    backgroundColor: "#EADB5B",
                    color: "#302B62",
                    borderRadius: "12px 12px 12px 12px",
                    width: "100%",
                  }}
                  className="text-center mt-25"
                >
                  <h3 className="mt-25">
                    {" "}
                    Get LIFETIME Unlimited Access to this course{" "}
                  </h3>
                  <h6 className="mb-25">
                    Now For
                    <span className="text-decoration-line-through">
                      {" "}
                      ₹9,999
                    </span>{" "}
                    ₹1,499 Only
                  </h6>
                </a>
              </center>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <div className="section">
        <div className="container mt-50 mb-50">
          <center>
            <h1>Loved by Students PAN INDIA</h1>
            <iframe
              width="80%"
              height="600"
              src="https://www.youtube-nocookie.com/embed/s9xJUE8QuLU?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-sm-6 mb-50">
                <div class="card shadow-lg rounded">
                  <img
                    src="https://courses.ankurwarikoo.com/wp-content/uploads/2022/04/04-20-jpg-new.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-sm-6 mb-50">
                <div class="card shadow-lg rounded">
                  <img
                    src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/06/1new.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-sm-6 mb-50">
                <div class="card shadow-lg rounded">
                  <img
                    src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/06/3.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-sm-6 mb-50">
                <div class="card shadow-lg rounded">
                  <img
                    src="https://courses.ankurwarikoo.com/wp-content/uploads/2021/11/new-testlong3.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="container mt-50 mb-50">
          <center>
            <h1>Get 100% refund, no questions asked!</h1>
          </center>

          <p>
            <b>
              If at all you are unhappy with this course, you can cancel anytime
              within 14 days of Purchase and get a full refund.
            </b>
          </p>
          <p>
            <b>NO awkward questions!</b>
          </p>
          <p>
            <b>
              Reach out to: webveda@ankurwarikoo.com & your money will be
              refunded. It’s that simple!
            </b>
          </p>

          <a
            href="https://rzp.io/l/NK1DYRG"
            style={{
              backgroundColor: "#EADB5B",
              color: "#302B62",
              borderRadius: "12px 12px 12px 12px",
              width: "100%",
            }}
            className="text-center"
          >
            <h3 className="mt-25">
              {" "}
              Get LIFETIME Unlimited Access to this course{" "}
            </h3>
            <h6 className="mb-25">
              Now For
              <span className="text-decoration-line-through"> ₹9,999</span>{" "}
              ₹1,499 Only
            </h6>
          </a>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: "#FFFEF3" }}>
        <div className="container mt-50 mb-50">
          <center>
            <h1>Frequently Asked Questions</h1>
          </center>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <a
            href="https://rzp.io/l/NK1DYRG"
            style={{
              backgroundColor: "#EADB5B",
              color: "#302B62",
              borderRadius: "12px 12px 12px 12px",
              width: "100%",
            }}
            className="text-center"
          >
            <h3 className="mt-25">
              {" "}
              Get LIFETIME Unlimited Access to this course{" "}
            </h3>
            <h6 className="mb-25">
              Now For
              <span className="text-decoration-line-through"> ₹9,999</span>{" "}
              ₹1,499 Only
            </h6>
          </a>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <small>
            This site is not a part of the Facebook™ website or Facebook™ Inc.
            Additionally, This site is NOT endorsed by Facebook™ in any way.
            FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we
            can not and do not make any guarantees about your ability to get
            results or earn any money with our ideas, information, tools or
            strategies. We just want to help you by giving great content,
            direction and strategies that worked well for us and our students
            and that we believe can move you forward. All of our terms, privacy
            policies and disclaimers for this program and website can be
            accessed via the link above. We feel transparency is important and
            we hold ourselves (and you) to a high standard of integrity. Thanks
            for stopping by. We hope this training and content brings you a lot
            of value.
          </small>
        </div>
      </div>
    </>
  );
};

export default CourseLP2;
