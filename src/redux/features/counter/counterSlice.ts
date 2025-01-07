import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByPayload: (state, action) => {
      state.count += action.payload;
    },
    decrementByPayload: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByPayload, decrementByPayload } =
  counterSlice.actions;
export default counterSlice.reducer;
