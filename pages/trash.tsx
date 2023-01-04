import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Icon } from "@iconify/react";

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
                  <div className="categoryInfo">
                    <div className="catAndSubCat">
                      <span className="catSubCatNames">{blog?.category?.name} </span>
                      <span>
                        <Icon
                          icon="material-symbols:chevron-right"
                          color="#969696"
                          width="20"
                          height="20"
                          inline={true}
                        />{" "}
                      </span>
                      <span>{blog?.subCategory?.name}</span>
                    </div>
                  </div>
                  <p className="subCategoryTitle">{blog?.subCategory?.name}</p>
                </div>
              </div>
              <div className="componentMapSection">
                {/* <p dangerouslySetInnerHTML={{__html:blog.content}}></p> */}
                <div className="blogDetails">
                  <div className="blogDetailsTitleSection">
                    <div className="blogTitle">{blog?.title}</div>
                    <div className="blogBy">
                      <div className="author">{blog.author?.fullName}</div>
                      <div className="separator">
                        <Icon
                          icon="ci:dot-05-xl"
                          width="15"
                          height="15"
                          color="#333333"
                        />
                      </div>
                      <div className="posted">
                        {/* {createdAt} */}
                        {/* {blogPostedDate} */}
                        hi
                      </div>
                    </div>
                    <div className="blogDetailsBodySection">
                      <div className="blogFromBackend"
                        dangerouslySetInnerHTML={{ __html: blog?.content }}
                       ></div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}

          {/* -------------------RIGHT SIDEBAR---------------------- */}
          <div className="rightBodySection">
            <BlogBodyRightSidebar blog={blogs?.filter((b,inf)=>b?._id!==blog?._id && b?.category?._id == blog?.category?._id)}/>
          </div>
        </div>
      </div>
    </>
  );
}
