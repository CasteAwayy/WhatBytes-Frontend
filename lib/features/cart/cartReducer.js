import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      const price = action.payload?.price ?? existingItem?.price;

      state.totalQuantity++;
      state.totalAmount += +price;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += +price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: price,
        });
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) return;

      state.totalQuantity--;
      state.totalAmount -= existingItem.totalPrice / existingItem.quantity;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -=
          existingItem.totalPrice / existingItem.quantity;
      }
    },
    deleteFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
