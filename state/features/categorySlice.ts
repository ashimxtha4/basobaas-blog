import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategory } from "../actions/actions";

export interface CategoryState {
  value: number;
  data: any;
  loading: string;
}

const initialState: CategoryState = {
  value: 0,
  data: [],
  loading: "",
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategory.pending, (state, action: PayloadAction<any>) => {
        state.loading = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = "success";
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "failed";
        state.data = [];
      });
  },
});

export const { increment, decrement } = categorySlice.actions;

export default categorySlice.reducer;
