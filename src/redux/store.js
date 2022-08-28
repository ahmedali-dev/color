import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./ColorSlice";

const store = configureStore({
  reducer: {
    Color: ColorSlice,
  },
});

export default store;
