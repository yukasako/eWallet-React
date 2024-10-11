import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    cardReducer: cardSlice,
  },
});

export default store;
