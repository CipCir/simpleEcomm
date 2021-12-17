import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "orders",
  initialState: {
    items: [],
  },
  reducers: {
    addOrder(state, action) {
      state.items.push(action.payload);
    },
    setFromStorage(state, action) {
      state.items = action.payload;
    },
  },
});
export const { addOrder, setFromStorage } = slice.actions;
export default slice.reducer;
