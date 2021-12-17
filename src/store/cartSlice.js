import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQ: 0,
  },
  reducers: {
    addToCart(state, action) {
      const currProd = action.payload;
      const prodIndx = state.items.find((el) => el.id === currProd.id);

      //if prod exists update q and total price
      if (prodIndx) {
        prodIndx.q++;
        prodIndx.totalPrice = prodIndx.q * prodIndx.price;
      } else {
        state.items.push({
          ...currProd,
          q: 1,
          totalPrice: currProd.price,
        });
      }

      state.totalQ++;
    },
    updateQ(state, action) {
      //issues with +- decimal numbers, had to use toFixed
      const prodIndx = state.items.find((el) => el.id === action.payload.id);
      if (action.payload.add) {
        prodIndx.q++;
        prodIndx.totalPrice = +(prodIndx.totalPrice + prodIndx.price).toFixed(
          12
        );
        state.totalQ++;
      } else {
        if (prodIndx.q === 1) return state;
        prodIndx.q--;
        prodIndx.totalPrice = +(prodIndx.totalPrice - prodIndx.price).toFixed(
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
