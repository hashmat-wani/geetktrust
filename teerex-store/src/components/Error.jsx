import { Box, styled, Button } from "@mui/material";
import React, { useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadingContext } from "../context/LoadingContext";
import { clearFilters, fetchProducts } from "../state/productsSlice";

const Error = () => {
  const dispatch = useDispatch();

  const { toggleLoading } = useContext(loadingContext);
  const { filters } = useSelector((state) => state.products, shallowEqual);

  return (
    <Alert
      sx={{
        ml: { md: "240px" },
      }}
    >
      <h1>Something went wrong</h1>
      <Button
        onClick={() => dispatch(fetchProducts({ toggleLoading, filters }))}
      >
        Reload
      </Button>
    </Alert>
  );
};

export default Error;

const Alert = styled(Box)({
  color: "#d11a2a",
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
    background: "#d11a2a",
    ":hover": {
      background: "#df0a1c",
    },
  },
});
