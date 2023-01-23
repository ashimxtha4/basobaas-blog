import { stringify } from "querystring";
import { api } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    cate_slug?: string;
    slug?: string;
    categoryId?: string;
  }) => {
    let otherQuery = { ...query };
    delete otherQuery.cate_slug;
    delete otherQuery.slug;
    return api.get(
      "collections/blogs/records/" +
        `${
          query.cate_slug
            ? `?${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(category.cate_slug='${query.cate_slug}')&sort=-created`
            : query.slug
            ? `?${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(slug='${query.slug}')&sort=-created`
            : query.categoryId
            ? `?${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(category='${query.categoryId}')&sort=-created`
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
