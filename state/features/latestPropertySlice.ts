import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLatestProperties } from "../actions/actions";

export interface latestPropertyState {
  value: number;
  data: any;
  loading: string;
}

const initialState: latestPropertyState = {
  value: 0,
  data: [],
  loading: "loading",
};

export const latestPropertySlice = createSlice({
  name: "latestPropertyData",
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
        fetchLatestProperties.pending,
        (state, action: PayloadAction<any>) => {
          state.loading = "loading";
        }
      )
      .addCase(
        fetchLatestProperties.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "success";
          state.data = action.payload;
        }
      )
      .addCase(
        fetchLatestProperties.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = "failed";
          state.data = [];
        }
      );
  },
});

export const { increment, decrement } = latestPropertySlice.actions;
export default latestPropertySlice.reducer;
