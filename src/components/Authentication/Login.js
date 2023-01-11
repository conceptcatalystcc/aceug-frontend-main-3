import { Alert } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { currentUser, login } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {}

    setLoading(false);
  }

  return (
    <>
      <div className="page-title-section section">
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
                    <h3 className="title">Login</h3>
                    <form className="login-form" onSubmit={handleFormSubmit}>
                      <div className="single-input mb-30">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="single-input mb-30">
                        <div className="row">
                          <div className="col-sm-6 remember-me-wrap">
                            <div className="checkbox-input">
                              <input
                                type="checkbox"
                                name="login-form-remember"
                                id="login-form-remember"
                              />
                              <label htmlFor="login-form-remember">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 lost-your-password-wrap">
                            <p>
                              <a href="#" className="lost-your-password">
                                Lost your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="single-input">
                        <button className="btn btn-primary btn-hover-secondary btn-width-100">
                          Log In
                        </button>
                      </div>
                    </form>

                    <div className="single-input mx-2">
                      <hr />
                      <center>
                        <p>
                          Don't have an account?{" "}
                          <a href="/signup">
                            <b> Sign up</b>
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

export default Login;
