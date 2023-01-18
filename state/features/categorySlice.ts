import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  value: number;
  data: any;
  
}

const initialState: CategoryState = {
  value: 0,
  data: [],
};

export const categorySlice = createSlice({
  name: "categoryData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCategory: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    allCategory: (state, action: PayloadAction<any>) => {},
  },
  extraReducers(builder){
    builder.
    addCase
  }
});

export const { increment, decrement, setCategory, allCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
