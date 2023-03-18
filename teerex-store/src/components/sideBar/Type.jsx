import { Box, styled } from "@mui/material";
import React from "react";

const types = ["Basic", "Hoodie", "Polo"];

const Type = ({ filter, handleChange }) => {
  return (
    <Wrapper>
      <h3>Type</h3>
      {types.map((node, idx) => (
        <Box className="filter_item" key={idx}>
          <input
            onChange={handleChange}
            type="checkbox"
            value={node}
            name="type"
            id={node}
            checked={filter.includes(node)}
          />
          <label htmlFor={node}>{node}</label>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Type;

const Wrapper = styled(Box)({});
