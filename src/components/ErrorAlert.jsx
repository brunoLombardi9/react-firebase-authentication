import { Grid, Typography } from "@mui/material";
import React from "react";

const ErrorAlert = ({input}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#dc3545",
        padding: "12px",
        borderRadius: "8px",
      }}
    >
      <Typography>{input}</Typography>
    </Grid>
  );
};

export default ErrorAlert;
