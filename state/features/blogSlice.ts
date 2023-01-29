import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogQueryType, fetchBlogs } from "../actions/actions";

type blogItemsResponseType = {
  id: string;
  category: string;
  cate_slug: string;
  content: string;
  created: string;
  images: string[];
  slug: string;
  title_np: string;
  title_en: string;
  total_views: string | number;
};

type initialItemType = {
  items: blogItemsResponseType[];
};
export interface BlogState {
  value: number;
  loading: string;
  search_loading: string;
  data: any[];
  market_news: any;
  lifestyle: initialItemType;
  home_loan: initialItemType;
  our_thoughts: initialItemType;
  law_and_policy: initialItemType;
  search: initialItemType;
  blogBySlug: any;
  blogByCategorySlug: any;
  blogByCategoryId: any;
}
export type BlogByCategoryKeyType =
  | "blogBySlug"
  | "market_news"
  | "lifestyle"
  | "home_loan"
  | "our_thoughts"
  | "law_and_policy"
  | "blogBySlug"
  | "search";

type fetchPostActionType = {
  data: any;
  slug?: any;
  blogByCategorySlug?: string;
  blogByCategoryId?: string;
  keyword?: string;
};
const initialState: BlogState = {
  value: 0,
  loading: "",
  search_loading: "",
  data: [],
  search: { items: [] },
  market_news: { items: [] },
  lifestyle: { items: [] },
  home_loan: { items: [] },
  our_thoughts: { items: [] },
  law_and_policy: { items: [] },
  blogBySlug: {},
  blogByCategoryId: { items: [] },
  blogByCategorySlug: { items: [] },
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
          const { data, blogByCategorySlug, blogByCategoryId, slug, keyword } =
            payload as fetchPostActionType;
          state.loading = "success";
          if (blogByCategorySlug) {
            // @ts-ignore
            state[blogByCategorySlug.replaceAll(" ", "").toLowerCase()] = data;
          } else if (blogByCategoryId) {
            // @ts-ignore
            state.blogByCategoryId = data;
          } else if (slug && !blogByCategorySlug) {
            state.blogBySlug = data;
          } else if (keyword) {
            state.search = data;
          } else {
            state.data = data.items;
          }
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
