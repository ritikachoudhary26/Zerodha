import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          removeCookie("token", { path: "/" });
          navigate("/login");
        }
      } catch (err) {
        removeCookie("token", { path: "/" });
        navigate("/login");
      }
    };

    verifyCookie();
  }, []);

  return children;
};


export default ProtectedRoute;