import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [blog, setBlog] = useState<any>(null);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);

  const getBlogsById = async (id: string) => {
    try {
      setLoading(true);
      const { blog } = await getAll(`/blogs/${id}`);
      setLoading(false);

      if (blog) setBlog(blog);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllBlogsByCat = async (query: {
    category: string;
    limit?: string | number;
    page?: string | number;
    sort?: string;
  }) => {
    function prepareUrlQuery(query: object) {
      var queryString = "?";
      Object.keys(query).forEach((key: string, index: number) => {
        //@ts-ignore
        if (query[key]) {
          if (index > 0) {
            //@ts-ignore
            queryString += "&" + key + "=" + query[key];
          }
          //@ts-ignore
          queryString += key + "=" + query[key];
        }
      });
      return queryString;
    }

    try {
      setLoading(true);
      const { blogs } = await getAll("/blogs" + prepareUrlQuery(query));
      setLoading(false);

      if (blogs) setBlogs(blogs);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      getBlogsById(router.query.id as string);
    }
  }, [router.query]);

  useEffect(() => {
    if (blog) {
      getAllBlogsByCat({
        category: blog.category.id as string,
      });
    }
  }, [blog]);

  console.log("hajhsajkd", blog)

  return (
    <>
      <div>
        <BlogNavbar />
      </div>
      <div className="bodyContainer">
        <div className="categoryBlogBody">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : !blogs ? (
            <h1>No Blogs Found</h1>
          ) : (
            <div className="leftBodySection">
              <div className="leftHeaderSection">
                <div className="categoryHeader">
                  <p className="categoryInfo">Category</p>
                  <p className="categoryTitle">{blog?.category?.name}</p>
                </div>
              </div>
              <div className="componentMapSection">
                <p dangerouslySetInnerHTML={{__html:blog.content}}></p>
              </div>
            </div>
          )}

          {/* -------------------RIGHT SIDEBAR---------------------- */}
          <div className="rightBodySection">
            <BlogBodyRightSidebar blog={blogs} />
          </div>
        </div>
      </div>
    </>
  );
}
