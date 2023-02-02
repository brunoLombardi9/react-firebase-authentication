import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import ErrorAlert from "./ErrorAlert";
import FormContainer from "./FormContainer";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, googleSignIn } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function formHandler(e) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }

  async function googleLogin(e) {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home")
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <FormContainer submitHandler={formHandler}>
      <Typography>Login</Typography>
      {error && <ErrorAlert input={error} />}
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

      <GoogleButton style={{ width: "100%" }} onClick={googleLogin} />

      <Link to="/signup">Doesnt have an account? Signup</Link>
    </FormContainer>
  );
};

export default Login;
