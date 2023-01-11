import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { baseURL } from "../../shared/baseUrl";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aspired_college, setAspiredCollege] = useState("");
  const [aspired_degree, setAspiredDegree] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      setLoading(true);
      axios
        .post(baseURL + "student/register", {
          name: name,
          phone: phone,
          email: email,
          aspired_degree: aspired_degree,
          aspired_college: aspired_college,
        })
        .then((response) => response.data)
        .then((data) => {
          navigate("/login");
        });
    } catch (e) {
      alert("Failed to register");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="page-title-section section">
        <div id="recaptcha-container"></div>
        <div className="page-title">
          <div className="container">
            <h1 className="title">Start your learning journey</h1>
          </div>
        </div>
      </div>

      <div className="login-register-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3"></div>
                <div className="col-xl-6 col-lg-6">
                  <div className="login-form-wrapper">
                    <h3 className="title">Register</h3>
                    <form
                      className="login-form"
                      action=""
                      onSubmit={handleFormSubmit}
                    >
                      <div className="single-input mb-30">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          required
                          id="name"
                          name="name"
                          placeholder="Your Full Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          required
                          id="email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="number"
                          required
                          id="phone"
                          name="phone"
                          placeholder="Your Phone Number"
                          onChange={(e) => setPhone(e.target.value)}
                          minLength="10"
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="aspired_degree">Aspired Degree</label>
                        <input
                          type="text"
                          required
                          id="aspired_degree"
                          name="aspired_degree"
                          placeholder="Degree you want to pursue"
                          onChange={(e) => setAspiredDegree(e.target.value)}
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="aspired_college">Aspired College</label>
                        <input
                          type="text"
                          required
                          id="aspired_college"
                          name="aspired_college"
                          placeholder="College you wish to get Admission in"
                          onChange={(e) => setAspiredCollege(e.target.value)}
                        />
                      </div>

                      <div className="single-input mb-30">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          required
                          minLength={8}
                          id="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          required
                          minLength={8}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="single-input">
                        <button
                          type="submit"
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="single-input mx-2">
                      <hr />
                      <center>
                        <p>
                          Already have an account?{" "}
                          <a href="/login">
                            <b> Log in </b>
                          </a>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
