import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    category?: string;
  }) => {
    let restQuery = JSON.parse(JSON.stringify(query));
    delete restQuery.category;
    return api.get(
      "collections/blogs/records/" +
        `${
          query.category
            ? `? ${
                Object.keys(restQuery).length && stringify(restQuery) + "&"
              }filter=(category.name_en='${query.category}')`
            : "?" + stringify(query)
        }`
    );
  },
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
