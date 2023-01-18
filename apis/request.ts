import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    category?: string;
    // sort?:string
  }) => {
      let restQuery = { ...query };
      delete restQuery.category;
      return api.get(
        "collections/blogs/records/" + 
          `${
            query.category
              ? `? ${
                  Object.keys(restQuery).length && stringify(restQuery) + "&"
                }filter=(category.cate_slug='${query.category}')&sort=-created`
              : "?" + stringify(query)+"&sort=-created"
          }`
      );
    
  },
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
