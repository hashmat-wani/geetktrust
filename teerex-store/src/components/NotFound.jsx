import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../state/productsSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  return (
    <Alert
      sx={{
        ml: { md: "240px" },
      }}
    >
      <h1>Oops! No results found</h1>
      <Button onClick={() => dispatch(clearFilters())}>
        Clear all Filters
      </Button>
    </Alert>
  );
};

export default NotFound;

const Alert = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "20px",
  marginTop: "220px",
  flexGrow: 1,
  h1: {
    textAlign: "center",
  },
  button: {
    color: "#fff",
    background: "#000000",
    ":hover": {
      background: "#000000",
    },
  },
});
