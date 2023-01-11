import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const OTPVerify = () => {
  const state = useLocation();
  const { phone } = state.state;
  const auth = getAuth();
  const { loginWithPhone } = useAuth();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          loginWithPhone(phone);
        },
      },
      auth
    );
  }, []);

  return <div></div>;
};

export default OTPVerify;
