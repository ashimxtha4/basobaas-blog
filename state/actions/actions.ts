import { request } from "../../apis/request";
import { createAsyncThunk } from "@reduxjs/toolkit";
export type blogQueryType = {
  cate_slug?: string;
  categoryId?: string;
  page?: number;
  perPage?: number;
  slug?: string;
};

//BLOGS
export const fetchBlogs = createAsyncThunk<{}, blogQueryType>(
  "get/blogs",
  async (query: blogQueryType) => {
    const res = await request.getBlogs(query);
    return {
      data: res.data,
      blogByCategory: query.cate_slug,
      slug: query.slug,
    };
  }
);

//CATEGORIES
export const fetchCategory = createAsyncThunk<any[]>(
  "get/category",
  async () => {
    const res = await request.getCategory();
    return res.data;
  }
);

//VIDEOS
export const fetchVideos = createAsyncThunk<any[]>("get/videos", async () => {
  const response = await request.getVideos();
  return response.data.items;
});
