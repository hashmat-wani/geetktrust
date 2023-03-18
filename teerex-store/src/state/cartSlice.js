import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: 1,
  //   imageURL:
  //     "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
  //   name: "Black Polo",
  //   type: "Polo",
  //   price: 250,
  //   currency: "INR",
  //   color: "Black",
  //   gender: "Men",
  //   quantity: 3,
  //   cartQty: 1,
  // },
  // {
  //   id: 2,
  //   imageURL:
  //     "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
  //   name: "Blue Polo",
  //   type: "Polo",
  //   price: 350,
  //   currency: "INR",
  //   color: "Blue",
  //   gender: "Women",
  //   quantity: 3,
  //   cartQty: 2,
  // },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      let idx = state.findIndex((el) => el.id === product.id);
      if (idx >= 0) {
        if (state[idx].cartQty >= product.quantity) {
          return alert(
            `This item has a limit of ${product.quantity} per customer`
          );
        }
        return state.map((el, i) =>
          i == idx ? { ...el, cartQty: el.cartQty + 1 } : el
        );
      }

      return [...state, { ...product, cartQty: 1 }];
    },
    changeQty: (state, action) => {
      const { id, newQty } = action.payload;
      return state.map((el) =>
        el.id === id ? { ...el, cartQty: newQty } : el
      );
    },
    removeItem: (state, action) => {
      return state.filter((el) => el.id != action.payload);
    },
  },
});

export const { addItem, changeQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
