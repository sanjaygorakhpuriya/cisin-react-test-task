import { configureStore } from "@reduxjs/toolkit";
import beerSlice from "../slices/beerSlice";

export const store = configureStore({
  reducer: {
    beer: beerSlice,
  },
});
