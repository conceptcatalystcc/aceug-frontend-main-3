import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

const LogoutPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Are you sure you want to logout?</h1>
            <center>
              <button
                className="btn btn-danger"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Yes
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
