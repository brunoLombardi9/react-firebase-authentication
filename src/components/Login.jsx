import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import FormContainer from "./FormContainer";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signUp } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function formHandler(e) {
    const email = emailRef.current.value;
    const password = emailRef.current.value;

    e.preventDefault();
  }

  return (
    <FormContainer submitHandler={formHandler}>
      <Typography>Login</Typography>
      <TextField
        type="email"
        fullWidth
        label="E-mail"
        required
        inputRef={emailRef}
      />
      <TextField
        type="password"
        fullWidth
        label="Password"
        required
        inputRef={passwordRef}
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{ height: "48px" }}
      >
        Log in
      </Button>

      <GoogleButton style={{ width: "100%" }} />

      <Link to="/signup">Doesnt have an account? Signup</Link>
    </FormContainer>
  );
};

export default Login;
