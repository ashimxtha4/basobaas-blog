import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: () => api.get("collections/blogs/records/"),
};

//Categories
let category = {
  getCategory: () => api.get("collections/category/records"),
};

//Categories
let videos = {
  getVideos: () => api.get("collections/videos/records"),
};
export const request = { ...blogs, ...category, ...videos };
