import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BlogState {
  value: number;
  data: any;
}

const initialState: BlogState = {
  value: 0,
  data: [],
};

export const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setBlogs: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    allBlogs: (state, action: PayloadAction<any>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setBlogs, allBlogs } = blogSlice.actions;

export default blogSlice.reducer;
