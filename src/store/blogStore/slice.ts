import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { blogInitialState } from "./initialState";

export const blogSlice = createSlice({
  name: "blog",
  initialState: blogInitialState,
  reducers: {
    handleSetLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});
