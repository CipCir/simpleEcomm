import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { setFromStorage } from "./store/ordersSlice";
import { getProds } from "./store/prodsSlice";

import Cart from "./pages/Cart";
import ProdList from "./pages/ProdList";
import CheckOut from "./pages/CheckOut";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function App() {
  const myOrders = useSelector((state) => state.orders.items);
  const dispatch = useDispatch();

  useEffect(() => {
    //get value at first load
    const storedOrders = localStorage.getItem("ORDERS");
    if (storedOrders) {
      dispatch(setFromStorage(JSON.parse(storedOrders)));
    }
    //loadProducts
    dispatch(getProds());
    console.log("getPrd");
  }, [dispatch]);

  useEffect(() => {
    //logic for syncing localstorage with orders state
    if (myOrders.length > 0) {
      localStorage.setItem("ORDERS", JSON.stringify(myOrders));
    }
  }, [myOrders, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <main style={{ marginTop: "10px" }}>
        <Container>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<ProdList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
