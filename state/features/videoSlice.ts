import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchVideos } from "../actions/actions";

export interface VideoState {
  value: number;
  data: any;
  loading: string;
}

const initialState: VideoState = {
  value: 0,
  data: [],
  loading: "",
};

export const videoSlice = createSlice({
  name: "videoData",
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
      .addCase(fetchVideos.pending, (state, action: PayloadAction<any>) => {
        state.loading = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = "success";
        state.data = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "failed";
        state.data = [];
      });
  },
});

export const { increment, decrement } = videoSlice.actions;

export default videoSlice.reducer;
