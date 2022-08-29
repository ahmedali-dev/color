import { configureStore } from "@reduxjs/toolkit";
import ColorLSlice from "./ColorLSlice";
import ColorSlice from "./ColorSlice";

const store = configureStore({
  reducer: {
    Color: ColorSlice,
    ColorL: ColorLSlice,
  },
});

export default store;
