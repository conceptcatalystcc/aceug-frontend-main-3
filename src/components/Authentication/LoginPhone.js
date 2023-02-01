import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import auth from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const LoginPhone = () => {
  const [resend, setResend] = useState(false);
  const [otp, setOtp] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const navigate = useNavigate();

  const { currentUser } = useAuth();

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

        setResend(true);
        // ...
      })
      .catch((error) => {
        setError("Invalid OTP Entered");
      });
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        auth.currentUser = user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

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

                    {error ? (
                      <div class="alert alert-danger" role="alert">
                        {error}
                      </div>
                    ) : (
                      <></>
                    )}

                    {resend && !error ? (
                      <div class="alert alert-success" role="alert">
                        OTP has been sent
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="single-input mb-30">
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

                    {resend ? (
                      <div className="single-input mb-30">
                        <input
                          type="text"
                          required
                          id="otp"
                          name="otp"
                          placeholder="OTP"
                          onChange={(e) => setOtp(e.target.value)}
                          minLength="10"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="single-input">
                      {!resend ? (
                        <button
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                          id="sendotp"
                          onClick={sendOTP}
                        >
                          Send OTP
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                          id="sendotp"
                          onClick={verifyOTP}
                        >
                          Verify OTP
                        </button>
                      )}
                    </div>

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

export default LoginPhone;
