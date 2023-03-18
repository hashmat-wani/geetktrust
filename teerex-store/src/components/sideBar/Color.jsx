import { Box, styled } from "@mui/material";
import React from "react";

const colors = [
  "Red",
  "Green",
  "Blue",
  "Black",
  "Yellow",
  "Grey",
  "White",
  "Purple",
];

const Color = ({ filter, handleChange }) => {
  return (
    <Wrapper>
      <h3>Color</h3>
      {colors.map((node, idx) => (
        <Box className="filter_item" key={idx}>
          <input
            onChange={handleChange}
            type="checkbox"
            value={node}
            name="color"
            id={node}
            checked={filter.includes(node)}
          />
          <label htmlFor={node}>{node}</label>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Color;

const Wrapper = styled(Box)({});
