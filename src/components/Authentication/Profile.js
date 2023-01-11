import React from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import Loader from "../Loader";

export const Profile = () => {
  const { currentUser, updatecurrentUserProfile, setError } = useAuth();

  console.log(currentUser);

  const navigate = useNavigate();

  if (!currentUser) {
    return <Loader />;
  }

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title"> {currentUser.email}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
