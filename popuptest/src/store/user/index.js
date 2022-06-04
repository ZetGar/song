import { createSlice } from "@reduxjs/toolkit";

// useState 역할
// state 하나를 slice라고 부름
let user = createSlice({
  // name: "state이름",
  // initialState: "값",
  name: "user",
  initialState: { name: "kim", age: 20 },

  /* 
  state 수정하기
  1. state 수정해주는 함수 만들기
  2. 만든 함수 export 해야 함
  3. 만든 함수 import 해서 사용
  */

  reducers: {
    changeName(state) {
      // return { name: "park", age: 20 };
      state.name = "park";
    },

    agePluse(state, action) {
      state.age += action.payload;
    },
  },
});

// agePluse(10);

export let { changeName, agePluse, addCount } = user.actions;

export default user;
