import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../state/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <img src={product.imageURL} alt="" />
      <Details>
        <strong>₹ {product.price}</strong>
        <Button
          disabled={product.quantity === 0}
          sx={{ background: "#000000" }}
          variant="contained"
          onClick={() => dispatch(addItem(product))}
        >
          {product.quantity ? "Add to cart" : "Out of stock"}
        </Button>
      </Details>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled(Box)({
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  padding: 10,
  img: {
    width: "100%",
    aspectRatio: 1,
  },
});
const Details = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
});
