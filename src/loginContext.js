/* eslint-disable */

import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./strings";
import axios from "axios";
import Swal from "sweetalert2";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  let token = localStorage.getItem("oja-token");
  const [user, setUserRole] = useState({});

  useEffect(() => {
    if (!token) {
      setUserRole({})
    } else {
      axios
        .get(`${api}/dashboard`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setUserRole(res.data.data);
          console.log(user)
          if (res.data.data === null) {
            alert("Empty data");
          }
          if (!res.data.data.profile_picture) {
            navigate(`/profile?settings/${res.data.data._id}`);
            Swal.fire({
              icon: "warning",
              text: "Help us know you better",
              title: "Add a profile picture",
            });
          }
        })
        .catch((error) => {
          if (error.response.data === "Unauthorized") {
            localStorage.removeItem("oja-token");
            navigate("/")
            // Swal.fire({
            //   title: "Session Timeout ⌛",
            //   text: "Please Login Again"
            // })
          }
        });
    }
  }, [token]);

  return (
    <LoginContext.Provider value={{ user }}>{children}</LoginContext.Provider>
  );
};
