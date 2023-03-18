import {
  Box,
  styled,
  IconButton,
  Input,
  InputAdornment,
  useMediaQuery,
  Button,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";

const AppBar = ({ searchInput, setSearchInput, setOpen }) => {
  const isMobile = useMediaQuery("(max-width:899px)");

  return (
    <Wrapper ml={{ md: "260px" }}>
      <Input
        fullWidth={isMobile}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <Button
        variant="contained"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ display: { md: "none" }, background: "#000000" }}
      >
        <FilterAltIcon />
      </Button>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: "10px",
  columnGap: "10px",
});
