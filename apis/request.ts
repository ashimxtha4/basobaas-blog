import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    category?: string;
  }) => {
    // if (query.category == "Law & Policy") {
    //   let restQuery = { ...query };
    //   delete restQuery.category;
    //   return api.get(
    //     "collections/blogs/records/" +
    //       `${
    //         query.category
    //           ? `? ${
    //               Object.keys(restQuery).length && stringify(restQuery) + "&"
    //             }filter=(category.cate_slug='law_policy')`
    //           : "?" + stringify(query)
    //       }`
    //   );
    // } else {
      let restQuery = { ...query };
      delete restQuery.category;
      return api.get(
        "collections/blogs/records/" +
          `${
            query.category
              ? `? ${
                  Object.keys(restQuery).length && stringify(restQuery) + "&"
                }filter=(category.cate_slug='${query.category}')`
              : "?" + stringify(query)
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
