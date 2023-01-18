import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: async () => await api.get("collections/blogs/records/"),
};

//Categories
let category = {
  getCategory: async () => await api.get("collections/category/records"),
};

//Categories
let videos = {
  getVideos: async () => await api.get("collections/videos/records"),
};
export const request = { ...blogs, ...category, ...videos };
