import { Box } from "@mui/material";
import React from "react";

const FormContainer = ({ children, submitHandler }) => {
  return (
    <Box
      gap={3}
      padding={3}
      backgroundColor="#fffff"
      sx={{
        width: {sm:"250px", md: "350px"},
        display: "flex",
        flexDirection: "column",
        minHeight: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: "10px",
        borderRadius: "12px",
        border: "1px solid grey",
      }}
      component="form"
      onSubmit={submitHandler}
    >
      {children}
    </Box>
  );
};

export default FormContainer;
