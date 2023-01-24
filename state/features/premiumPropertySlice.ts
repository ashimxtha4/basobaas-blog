import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPremiumProperties } from "../actions/actions";

export interface premiumPropertyState {
  value: number;
  data: any;
  loading: string;
}

const initialState: premiumPropertyState = {
  value: 0,
  data: [],
  loading: "loading",
};

export const premiumPropertySlice = createSlice({
  name: "premiumPropertyData",
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
      .addCase(
        fetchPremiumProperties.pending,
        (state, action: PayloadAction<any>) => {
          state.loading = "loading";
        }
      )
      .addCase(
        fetchPremiumProperties.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "success";
          state.data = action.payload;
        }
      )
      .addCase(
        fetchPremiumProperties.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = "failed";
          state.data = [];
        }
      );
  },
});

export const { increment, decrement } = premiumPropertySlice.actions;
export default premiumPropertySlice.reducer;
