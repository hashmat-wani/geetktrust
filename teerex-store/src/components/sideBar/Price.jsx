import { Box, styled } from "@mui/material";
import React from "react";

const prices = ["0TO259", "251TO450", "451"];

const Price = ({ filter, handleChange }) => {
  return (
    <Wrapper>
      <h3>Price</h3>
      {prices.map((node, idx) => (
        <Box className="filter_item" key={idx}>
          <input
            onChange={handleChange}
            type="checkbox"
            value={node}
            name="price"
            id={node}
            checked={filter.includes(node)}
          />
          <label htmlFor={node}>
            {node.split("TO")[0] != 0 && "₹"}
            {node.split("TO")[0]}{" "}
            {node.split("TO")[1] ? `- ₹${node.split("TO")[1]}` : " Above"}
          </label>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Price;

const Wrapper = styled(Box)({});
