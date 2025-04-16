// components/PrivateRoute.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ publicPage = false }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  console.log("PrivateRoute - isAuthenticated:", isAuthenticated, "user:", user);

  useEffect(() => {
    if (!publicPage && !isAuthenticated) {
      toast.error("Please log in or sign up to access checkout.", {
        duration: 5000,
        position: "top-center",
        action: {
          label: "Log In / Sign Up",
          onClick: () => navigate("/login", { replace: true }),
        },
      });
      navigate("/login", { replace: true });
    } else if (publicPage && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [publicPage, isAuthenticated, navigate]);

  if (!publicPage && !isAuthenticated) {
    return null;
  }

  if (publicPage && isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;