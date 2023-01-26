import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchVideos } from "../actions/actions";

export interface VideoState {
  value: number;
  loading: string;
  educational_videos: {items: []};
  basobaas_roundup: {items: []};
  property_videos: {items: []};
}

export type VideoByCategoryKeyType =
  | "educational_videos"
  | "basobaas_roundup"
  | "property_videos";

const initialState: VideoState = {
  value: 0,
  educational_videos: { items: [] },
  basobaas_roundup: { items: [] },
  property_videos: { items: [] },
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
        const { cate_slug, data } = action.payload as any;
        state.loading = "success";
        state[cate_slug as VideoByCategoryKeyType] = data;
      })
      .addCase(fetchVideos.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "failed";
      });
  },
});

export const { increment, decrement } = videoSlice.actions;

export default videoSlice.reducer;
