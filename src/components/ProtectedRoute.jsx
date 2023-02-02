import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
let {user} = useAuthContext()

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
