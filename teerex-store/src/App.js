import Navbar from "./components/navbar/Navbar";
import Products from "./scenes/products/Products";
import { Backdrop, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { loadingContext } from "./context/LoadingContext";
import { Route, Routes } from "react-router-dom";
import Cart from "./scenes/cart/Cart";

function App() {
  const { loading } = useContext(loadingContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
