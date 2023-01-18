import { request } from "../../apis/request";
import { createAsyncThunk } from "@reduxjs/toolkit";
export type blogQueryType = {
  page?: number;
  perPage?: number;
  category?:string
};
//BLOGS
export const fetchBlogs = createAsyncThunk<{}, blogQueryType>(
  "get/blogs",
  async (query: blogQueryType) => {
    const res = await request.getBlogs(query);
    return {
      data:res.data,
      whichCat:query.category
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
