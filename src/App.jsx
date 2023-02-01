import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  return (
  <AuthContext>
     <BrowserRouter>
      <Grid container justifyContent="center" alignItems="center" height="100vh" backgroundColor="#fafafa">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  </AuthContext>
  );
};

export default App;
