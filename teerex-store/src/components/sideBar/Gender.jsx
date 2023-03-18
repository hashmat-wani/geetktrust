import { Box, styled } from "@mui/material";
import React from "react";

const genders = ["Men", "Women"];

const Gender = ({ filter, handleChange }) => {
  return (
    <Wrapper>
      <h3>Gender</h3>
      {genders.map((node, idx) => (
        <Box className="filter_item" key={idx}>
          <input
            onChange={handleChange}
            type="checkbox"
            value={node}
            name="gender"
            id={node}
            checked={filter.includes(node)}
          />
          <label htmlFor={node}>{node}</label>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Gender;

const Wrapper = styled(Box)({});
