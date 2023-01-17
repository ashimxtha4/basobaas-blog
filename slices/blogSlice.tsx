import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GetAllState {
  value: number;
  data: any;
}

const initialState: GetAllState = {
  value: 0,
  data: [],
};

export const getAllSlice = createSlice({
  name: "getAll",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    allBlogs: (state, action) => {},
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, setBlogs, allBlogs } = getAllSlice.actions;

export default getAllSlice.reducer;
