import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    category?: string;
    slug?: string;
  }) => {
    let otherQuery = { ...query };
    delete otherQuery.category;
    delete otherQuery.slug;
    return api.get(
      "collections/blogs/records/" +
        `${
          query.category
            ? `? ${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(category.cate_slug='${query.category}')&sort=-created`
            : query.slug
            ? `? ${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(slug='${query.slug}')&sort=-created`
            : "?" + stringify(query) + "&sort=-created"
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
