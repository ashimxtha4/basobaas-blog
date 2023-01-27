import { stringify } from "querystring";
import { VideoByCategoryKeyType } from "../state/features/videoSlice";
import { api, propertyApi } from "./api";

//Blogs
let blogs = {
  getBlogs: (query: {
    page?: string | number;
    perPage?: string | number;
    cate_slug?: string;
    slug?: string;
    categoryId?: string;
    keywords?: string;
  }) => {
    let otherQuery = { ...query };
    delete otherQuery.cate_slug;
    delete otherQuery.slug;
    delete otherQuery.categoryId;
    delete otherQuery.keywords;
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
            : query.keywords
            ? `?${
                Object.keys(otherQuery).length && stringify(otherQuery) + "&"
              }filter=(category~'${query.keywords}')`
            : "?" + stringify(query) + "&sort=-created"
        }`
    );
  },
};

//Categories
let category = {
  getCategory: async () => await api.get("collections/category/records"),
};

//Videos
let videos = {
  getVideos: async (cate_slug: string) =>
    await api.get(
      `collections/videos/records?filter=(category.cate_slug='${cate_slug}')&sort=-created&perPage=3`
    ),
};

//Premium Properties
let premiumProperties = {
  getPremiumProperties: async () =>
    await propertyApi.get("/api/properties/premium?sort=random"),
};

//Latest Properties
let latestProperties = {
  getLatestProperties: async () =>
    await propertyApi.get("/api/properties-latest"),
};

let keyWords = {
  postKeywords: async (payload: any) => {
    await api.post("collections/category/records", payload);
  },
};

export const request = {
  ...blogs,
  ...category,
  ...videos,
  ...premiumProperties,
  ...latestProperties,
  ...keyWords,
};
