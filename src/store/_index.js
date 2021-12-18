import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import orderReducer from "./ordersSlice";
import productsReducer from "./prodsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    prods: productsReducer,
  },
});
