import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
