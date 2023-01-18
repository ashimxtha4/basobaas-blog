import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: { page?: string | number, perPage?: string | number, category?:string }) =>
{ 
 return api.get("collections/blogs/records/"+`${ query.category?`?filter=(category.name_en='${query.category}')`:'?'+stringify(query)}`)
}};

//Categories
let category = {
  getCategory: async () => await api.get("collections/category/records"),
};

//Categories
let videos = {
  getVideos: async () => await api.get("collections/videos/records"),
};
export const request = { ...blogs, ...category, ...videos };
