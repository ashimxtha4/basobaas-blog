import { request } from "../../apis/request";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideoByCategoryKeyType } from "../features/videoSlice";
export type blogQueryType = {
  cate_slug?: string;
  categoryId?: string;
  page?: number;
  perPage?: number;
  slug?: string;
  sort?: string;
};

export type videoQueryType = {
  cate_slug?: string;
  data: any;
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
      sort: query.sort,
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

//VIDEOS  <any[],videoQueryType>
export const fetchVideos = createAsyncThunk<{}, any>(
  "get/videos",
  async (cate_slug: string) => {
    const response = await request.getVideos(cate_slug as string);
    return { data: response.data, cate_slug: cate_slug };
  }
);

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
