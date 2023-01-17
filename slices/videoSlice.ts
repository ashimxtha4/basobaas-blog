import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
  value: number;
  data: any;
}

const initialState: VideoState = {
  value: 0,
  data: [],
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
    setVideo: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    allVideo: (state, action: PayloadAction<any>) => {},
  },
});

export const { increment, decrement, setVideo, allVideo } = videoSlice.actions;

export default videoSlice.reducer;
