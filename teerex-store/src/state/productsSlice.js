import { createSlice } from "@reduxjs/toolkit";
import { api } from "../utils/api";
import { STATUS } from "../utils/enums";

const initialState = {
  products: [],
  filters: { color: [], type: [], gender: [], price: [] },
  status: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    setFilters: (state, action) => {
      return { ...state, filters: action.payload };
    },
    clearFilters: (state, action) => ({
      ...state,
      filters: initialState.filters,
    }),

    setStatus: (state, action) => {
      return { ...state, status: action.payload };
    },
  },
});

export const { setProducts, setFilters, clearFilters, setStatus } =
  productSlice.actions;

export default productSlice.reducer;

export const fetchProducts =
  ({ toggleLoading, filters, searchInput }) =>
  (dispatch) => {
    const { gender, price, color, type } = filters;
    let price_gte = [];
    let price_lte = [];
    if (price?.length) {
      price.map((el) => {
        el = el.split("TO");
        price_gte.push(el[0]);
        el[1] && price_lte.push(el[1]);
      });
    }
    toggleLoading();
    api
      .get("/products", {
        params: { gender, color, type, price_gte, price_lte, q: searchInput },
      })
      .then(({ data }) => {
        // console.log(data);
        dispatch(setStatus(STATUS.IDLE));
        dispatch(setProducts(data));
      })
      .catch((err) => {
        dispatch(setStatus(STATUS.ERROR));
      })
      .finally(toggleLoading);
  };

export const handleFilters =
  ({ name, value, checked, filters }) =>
  (dispatch) => {
    if (checked) {
      dispatch(setFilters({ ...filters, [name]: [...filters[name], value] }));
    } else {
      dispatch(
        setFilters({
          ...filters,
          [name]: filters[name].filter((el) => el !== value),
        })
      );
    }
  };
