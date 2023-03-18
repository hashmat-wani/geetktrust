import React, { useContext, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  ProductsContainer,
  Content,
  Wrapper,
  NoResult,
} from "./products.style";
import Card from "./Card";
import AppBar from "./AppBar";
import SideBar from "../../components/sideBar/SideBar";
import { loadingContext } from "../../context/LoadingContext";
import useDebounce from "../../hooks/useDebounce";
import { clearFilters, fetchProducts } from "../../state/productsSlice";
import { Button } from "@mui/material";
import NotFound from "../../components/NotFound";
import Error from "../../components/Error";
import { STATUS } from "../../utils/enums";

const Products = () => {
  const dispatch = useDispatch();
  const { toggleLoading } = useContext(loadingContext);
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const debouncedVal = useDebounce(searchInput);

  const { products, filters, status } = useSelector(
    (state) => state.products,
    shallowEqual
  );

  useEffect(() => {
    const args = { toggleLoading, filters, searchInput };
    dispatch(fetchProducts(args));
  }, [filters, debouncedVal]);

  return (
    <Wrapper>
      <AppBar {...{ searchInput, setSearchInput, setOpen }} />
      <Content>
        <SideBar {...{ open, setOpen }} />

        {status === STATUS.ERROR ? (
          <Error />
        ) : !!products.length ? (
          <ProductsContainer
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(auto-fill,240px)",
            }}
            sx={{
              flexGrow: 1,
              ml: { md: "240px" },
            }}
          >
            {products.map((node) => (
              <Card key={node.id} product={node} />
            ))}
          </ProductsContainer>
        ) : (
          <NotFound />
        )}
      </Content>
    </Wrapper>
  );
};

export default Products;
