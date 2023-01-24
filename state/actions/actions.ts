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
      blogByCategorySlug: query.cate_slug,
      blogByCategoryId: query.categoryId,
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

//PREMIUM PROPERTIES
export const fetchPremiumProperties = createAsyncThunk<any[]>(
  "get/premiumProperties",
  async () => {
    const response = await request.getPremiumProperties();
    return response.data;
  }
);

//LATEST PROPERTIES
export const fetchLatestProperties = createAsyncThunk<any[]>(
  "get/latestProperties",
  async () => {
    const response = await request.getLatestProperties();
    return response.data;
  }
);
