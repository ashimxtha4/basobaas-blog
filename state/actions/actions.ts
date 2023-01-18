import { request } from "../../apis/request";
import { createAsyncThunk } from "@reduxjs/toolkit";

//BLOGS
export const fetchBlogs = createAsyncThunk<any[]>("get/blogs", async () => {
  const res = await request.getBlogs();
  return res.data;
});

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
