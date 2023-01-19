import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogQueryType, fetchBlogs } from "../actions/actions";

export interface BlogState {
  value: number;
  loading: string;
  data: any[];
  market_news: any[];
  lifestyle: any[];
  home_loan: any[];
  our_thoughts: any[];
  law_and_policy: any[];
}
type fetchPostActionType = {
  data: any;
  whichCat?: string;
};
const initialState: BlogState = {
  value: 0,
  loading: "",
  data: [],
  market_news: [],
  lifestyle: [],
  home_loan: [],
  our_thoughts: [],
  law_and_policy: [],
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action: PayloadAction<any>) => {
        state.loading = "loading";
      })
      .addCase(
        fetchBlogs.fulfilled,
        (state, { payload, type }: PayloadAction<any>) => {
          const { data, whichCat } = payload as fetchPostActionType;
          state.loading = "success";
          if (whichCat) {
            //@ts-ignore
            state[whichCat.replaceAll(" ", "").toLowerCase()] = data;
          } else {
            state.data = data.items;
          }
          // if(whichCat==='Lifestyle'){
          //   state.lifestyleBlog = data;
          // }
          // else if (whichCat==='Market News'){
          //   state.marketNewsBlog = data;

          // }
        }
      )
      .addCase(fetchBlogs.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "failed";
        state.data = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = blogSlice.actions;

export default blogSlice.reducer;
