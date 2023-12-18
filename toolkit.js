import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

// Action
const addToCart = createAction("ADD_TO_CART");
const loginUser = createAction("CREATE_SESSION");

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(loginUser, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("Oncreate store:  ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

// Dispatch
store.dispatch(addToCart({id: 1, qty: 10}));
store.dispatch(addToCart({id: 2, qty: 20}));
store.dispatch(loginUser());
