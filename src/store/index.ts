import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blogStore/slice";

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
