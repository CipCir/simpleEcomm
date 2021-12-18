import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQ: 0,
  },
  reducers: {
    addToCart(state, action) {
      const sentProd = action.payload;
      const currProd = state.items.find((el) => el.id === sentProd.id);

      //if prod exists update q and total price
      if (currProd) {
        currProd.q++;
        currProd.totalPrice = currProd.q * currProd.price;
      } else {
        state.items.push({
          ...sentProd,
          q: 1,
          totalPrice: sentProd.price,
        });
      }

      state.totalQ++;
    },
    updateQ(state, action) {
      //issues with +- decimal numbers, had to use toFixed
      const currProd = state.items.find((el) => el.id === action.payload.id);
      if (action.payload.add) {
        currProd.q++;
        currProd.totalPrice = +(currProd.totalPrice + currProd.price).toFixed(
          12
        );
        state.totalQ++;
      } else {
        if (currProd.q === 1) return state;
        currProd.q--;
        currProd.totalPrice = +(currProd.totalPrice - currProd.price).toFixed(
          12
        );
        state.totalQ--;
      }
    },
    removeProd(state, action) {
      //store product q to dicrease totalQ
      const prodIndx = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      const prodQ = state.items[prodIndx].q;
      state.items.splice(prodIndx, 1);
      state.totalQ -= prodQ;
    },
    clearCart(state, action) {
      state.items = [];
      state.totalQ = 0;
    },
  },
});
export const { addToCart, updateQ, removeProd, clearCart } = slice.actions;
export default slice.reducer;
