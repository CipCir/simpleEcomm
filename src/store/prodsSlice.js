import { createSlice } from "@reduxjs/toolkit";
import Products from "../products.js";

const slice = createSlice({
  name: "prods",
  initialState: { list: [] },
  reducers: {
    getProds(state, action) {
      state.list = Products();
      console.log(Products());
    },
  },
});
export const { getProds } = slice.actions;
export default slice.reducer;
