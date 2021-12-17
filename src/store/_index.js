import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import orderReducer from "./ordersSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});
