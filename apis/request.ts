import { api } from "./api";

//Get Blogs
let blogs = {
  getBlogs: () => api.get("collections/blogs/records/"),
};

export const request = { ...blogs };
