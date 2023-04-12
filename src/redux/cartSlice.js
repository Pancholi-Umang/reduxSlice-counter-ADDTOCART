import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  //----------------> reducers lakhvu reducer nai
  reducers: {
    addCart(state, action) {
      console.log(action);
      state.cartItems = [...state.cartItems, action.payload];
      // state.push(action.payload);
    },
    deleteRecord(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { addCart, deleteRecord } = cartSlice.actions;
export default cartSlice.reducer;
