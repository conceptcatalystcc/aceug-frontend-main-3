import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../shared/baseUrl";
import auth from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const getCurrentUser = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    setStudent(auth.currentUser);
  });

  return student;
};

export default getCurrentUser;
