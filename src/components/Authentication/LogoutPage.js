import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(async () => {
    localStorage.removeItem("tokem");
    navigate("/");
  }, []);
  return <div></div>;
};

export default LogoutPage;
