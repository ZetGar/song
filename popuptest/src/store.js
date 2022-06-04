import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 역할
// state 하나를 slice라고 부름
let user = createSlice({
  // name: "state이름",
  // initialState: "값",
  name: "user",
  initialState: "kim",

  /* 
  state 수정하기
  1. state 수정해주는 함수 만들기
  2. 만든 함수 export 해야 함
  3. 만든 함수 import 해서 사용
  */

  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});

export let { changeName } = user.actions;

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
