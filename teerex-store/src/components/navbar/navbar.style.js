import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Wrapper = styled(Box)({
  background: "#f1f0f0",
  display: "flex",
  alignItems: "center",
  padding: "20px 30px",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
});

export const Logo = styled(Link)({});
export const Cart = styled(Box)({
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  a: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
});
