import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./features/shopping/shoppingSlice";
import cartReducer from "./features/cart/cartReducer";
export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    cart: cartReducer,
  },
});
