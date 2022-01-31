import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isLoading: false,
    isDone: false,
    number: 0,
    error: null,
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.isLoading = true;

      console.log("getUser실행:::::::::", action.payload);
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;

      console.log("getUserSuccess::::::", action.payload);
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log("getUserFailure::::::", action.payload);
    },
    increment: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    incrementSuccess: (state) => {
      state.isLoading = false;
      state.isDone = true;
      state.number = state.number + 1;
    },
    incrementFailure: (state, action) => {
      state.isLoading = false;
      state.isDone = false;
      state.error = action.error;
    },
    decrement: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    decrementSuccess: (state) => {
      state.isLoading = false;
      state.isDone = true;
      state.number = state.number - 1;
    },
    decrementFailure: (state, action) => {
      state.isLoading = false;
      state.isDone = false;
      state.error = action.error;
    },
  },
});

export const counterSliceActions = counterSlice.actions;

export default counterSlice.reducer;
