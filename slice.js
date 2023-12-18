import {configureStore, createSlice} from "@reduxjs/toolkit";

// Cart
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("Oncreate store:  ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}));
