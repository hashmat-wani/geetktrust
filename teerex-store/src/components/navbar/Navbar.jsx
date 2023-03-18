import React from "react";
import { Cart, Logo, Wrapper } from "./navbar.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Badge } from "@mui/material";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems, shallowEqual);
  const totalItems = () => cartItems.reduce((ac, el) => ac + el.cartQty, 0);

  return (
    <Wrapper sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Logo to="/">
        <h2>TeeRex Store</h2>
      </Logo>
      <Cart>
        <Link to="/">Products</Link>
        <Link to="/cart">
          <Badge badgeContent={totalItems()} color="primary">
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </Badge>
        </Link>
      </Cart>
    </Wrapper>
  );
};

export default Navbar;
