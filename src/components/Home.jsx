import { Box, Button, Typography } from "@mui/material";
import useAuthContext from "../context/AuthContext";
import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";

const Home = () => {
  const { user, logOut } = useAuthContext();
  const [error, setError] = useState("");

  async function logOutHandler() {
    try {
      await logOut();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Box
      gap={3}
      padding={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: { sm: "150px", md: "250px" },
        minHeight: "50%",
        borderRadius: "8px",
      }}
    >
      {error && <ErrorAlert input={error} />}
      <Typography>Welcome {user.email}</Typography>

      <Button variant="contained" onClick={logOutHandler}>
        Log Out
      </Button>
    </Box>
  );
};

export default Home;
