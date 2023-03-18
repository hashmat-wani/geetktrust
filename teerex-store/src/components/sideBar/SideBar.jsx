import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  clearFilters,
  handleFilters,
  setFilters,
} from "../../state/productsSlice";
import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import { Wrapper } from "./sideBar.style";
import Type from "./Type";

const SideBar = ({ open, setOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useMediaQuery("(max-width:899px)");

  const { filters } = useSelector((state) => state.products, shallowEqual);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const args = { name, value, checked, filters };
    dispatch(handleFilters(args));
  };

  useEffect(() => {
    dispatch(
      setFilters({
        color: searchParams.getAll("color"),
        type: searchParams.getAll("type"),
        gender: searchParams.getAll("gender"),
        price: searchParams.getAll("price"),
      })
    );
  }, []);

  useEffect(() => {
    setSearchParams(filters);
  }, [filters]);

  return (
    <Wrapper
      variant={isMobile ? "temporary" : "permanent"}
      anchor={isMobile ? "right" : "left"}
      open={open}
      onClose={() => setOpen(!open)}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
          p: "20px",
          pt: "80px",
        },
      }}
    >
      <Box className="filter">
        <Button onClick={() => dispatch(clearFilters())}>
          Clear all Filters
        </Button>
        <Color filter={filters.color} handleChange={handleChange} />
        <Gender filter={filters.gender} handleChange={handleChange} />
        <Type filter={filters.type} handleChange={handleChange} />
        <Price filter={filters.price} handleChange={handleChange} />
      </Box>
    </Wrapper>
  );
};

export default SideBar;
