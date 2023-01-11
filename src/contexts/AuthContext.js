import React from "react";

import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { baseURL } from "../shared/baseUrl";

const auth = getAuth();

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const appVerifier = window.recaptchaVerifier;

  function register(
    name,
    phone,
    aspired_degree,
    aspired_college,
    email,
    password
  ) {
    //return createUserWithEmailAndPassword(auth, email, password);
    axios
      .post(baseURL + "student/register", {
        name: name,
        phone: phone,
        email: email,
        password: password,
        aspired_degree: aspired_degree,
        aspired_college: aspired_college,
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data.uid) {
          signInWithPhoneNumber(auth, phone);
        }
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function loginWithPhone(phone) {
    return signInWithPhoneNumber(auth, phone);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout,
    loginWithPhone,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
