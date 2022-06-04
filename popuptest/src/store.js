import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 역할
// state 하나를 slice라고 부름
let user = createSlice({
  // name: "state이름",
  // initialState: "값",
  name: "user",
  initialState: "kim",
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    // 중요 여기에 등록해야 사용 가능
    // 작명: user.reducer,
    user: user.reducer,
    cart: cart.reducer,
  },
});
