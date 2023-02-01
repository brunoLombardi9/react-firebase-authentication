import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import ErrorAlert from "./ErrorAlert";
import FormContainer from "./FormContainer";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function formHandler(e) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    e.preventDefault();
    setError("");

    if (password === passwordConfirmation) {
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Passwords dont match");
    }
  }

  return (
    <FormContainer submitHandler={formHandler}>
      <Typography>Sign Up</Typography>
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

      <TextField
        type="password"
        fullWidth
        label="Password confirmation"
        required
        inputRef={passwordConfirmationRef}
      />

      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{ height: "48px" }}
      >
        Sign up
      </Button>

      <GoogleButton style={{ width: "100%" }} />

      <Link to="/">Already have an account? Log In</Link>
    </FormContainer>
  );
};

export default SignUp;
