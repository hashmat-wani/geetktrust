import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)({
  minHeight: "100vh",
  padding: "10px",
  minWidth: "350px",
  width: "400px",
  margin: "auto",
  h1: {
    margin: "20px 0",
    textDecoration: "underline",
  },
});

export const Card = styled(Box)({
  // border: "1px solid red",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  columnGap: "20px",
  img: {
    width: "100px",
  },
  ".action_qty, .action_dlt": {
    flex: 1,
  },
});

export const Detail = styled(Box)({
  flex: 2,
});

export const Total = styled(Box)({
  textAlign: "center",
  "h1,p": { display: "inline" },
  margin: "15px 0",
});

export const Empty = styled(Box)({
  // border: "1px solid red",
  display: "grid",
  placeItems: "center",
  h1: { textDecoration: "none" },
});
