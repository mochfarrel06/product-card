import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {cart: cartSlice},
});
console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store change: ", store.getState());
});

export default store;
