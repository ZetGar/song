import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/user";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    // addCount(state, action) {
    //   let num = state.findIndex((a) => {
    //     // return 조건식;
    //     return a.i === action.payload;
    //   });

    //   // action.payload;
    //   state[num].count++;
    // },
    minusCount(state, action) {
      state[action.payload].count--;
    },

    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, minusCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    // 중요 여기에 등록해야 사용 가능
    // 작명: user.reducer,
    user: user.reducer,
    cart: cart.reducer,
  },
});
