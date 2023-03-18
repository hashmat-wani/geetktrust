import { Button, Divider, IconButton, MenuItem, Select } from "@mui/material";
import React, { Fragment } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Card, Detail, Empty, Total, Wrapper } from "./cart.style";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeQty, removeItem } from "../../state/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cartItems, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () =>
    items.reduce((ac, el) => ac + el.cartQty * el.price, 0);

  const handleChange = (e, id) => {
    console.log(e.target.value);
    if (e.target.value == 0) {
      return handleDelete(id);
    }
    dispatch(changeQty({ id, newQty: e.target.value }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  console.log(items);
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>

      {items.length ? (
        <>
          {items.map((el, idx) => (
            <Fragment key={idx}>
              <Card>
                <img src={el.imageURL} alt="" />
                <Detail>
                  <h4>{el.name}</h4>
                  <h3>₹{el.price}</h3>
                </Detail>

                <Select
                  className="action_qty"
                  value={el.cartQty}
                  onChange={(e) => handleChange(e, el.id)}
                >
                  {Array(el.quantity + 1)
                    .fill()
                    .map((_, i) => (
                      <MenuItem key={i} value={i}>
                        Qty: {i === 0 ? `${i} (Delete)` : i}
                      </MenuItem>
                    ))}
                </Select>

                <IconButton
                  className="action_dlt"
                  sx={{ color: "#d11a2a" }}
                  onClick={() => handleDelete(el.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
              <Divider />
            </Fragment>
          ))}

          <Total>
            <h1>Total Amount:</h1>
            <p> ₹ {getTotal()}</p>
          </Total>
        </>
      ) : (
        <Empty>
          <h1>Your Cart is empty.</h1>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            sx={{ background: "#000000" }}
          >
            Shop now
          </Button>
        </Empty>
      )}
    </Wrapper>
  );
};

export default Cart;
