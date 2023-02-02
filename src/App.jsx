import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  return (
  <AuthContext>
     <BrowserRouter>
      <Grid container justifyContent="center" alignItems="center" height="100vh" backgroundColor="#abcbe5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute ><Home/></ProtectedRoute >} />
        </Routes>
      </Grid>
    </BrowserRouter>
  </AuthContext>
  );
};

export default App;
