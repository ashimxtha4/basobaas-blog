import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Navbar from "../../layouts/Navbar";
import { IMG_URL } from "../../baseConstants";

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
        //  @ts-ignore
        if (query[key]) {
          if (index > 0) {
            //  @ts-ignore
            queryString += "&" + key + "=" + query[key];
          }
          //  @ts-ignore
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
      <div className="blogDetailsAlignmentContainer">
        <div className="navBlend">
          <Navbar/>
        </div>
        <div className="blogContainerDiv">
          <div className="blogSecNavBlend"></div>
          <div className="footerBlend"></div>
          <div className="contentDiv">
            <div className="secNavDiv">
              <BlogNavbar />
            </div>
            <div className="bodyContainer">
              {loading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ position: "absolute", left: "50%" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : !blogs.length ? (
                <h1>No Blogs Found</h1>
              ) : (
                <div className="categoryBlogBody">
                  <div className="blogDetailsLeftBodySection">
                    <div className="leftHeaderSection">
                      <div className="blogDetailsCategoryHeader">
                        <div className="categoryInfo">
                          <div className="catAndSubCat">
                            <span className="catSubCatNames">
                              {blog?.category?.name}{" "}
                            </span>
                            <span>
                              <Icon
                                icon="material-symbols:chevron-right"
                                color="#969696"
                                width="20"
                                height="20"
                                inline={true}
                              />{" "}
                            </span>
                            <span className="catSubCatNames">
                              {blog?.subCategory?.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="blogDetailsTitle">
                        <div className="blogSubCategoryTitle">
                          {" "}
                          {blog?.subCategory?.name}{" "}
                        </div>

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
                      </div>
                    </div>
                    <div className="blogDetailsComponentSection">
                      {/* <p dangerouslySetInnerHTML={{__html:blog.content}}></p> */}
                      <div className="blogDetails">
                        <div className="blogDetailsThumbnail">
                          <img
                            src={`${IMG_URL as string}` + `${blog?.images[0]}`}
                          />
                        </div>
                        <div
                          className="blogDetailsFromBackend"
                          dangerouslySetInnerHTML={{
                            __html: blog?.content,
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* <div className="topSearchSection">Top Search</div>
                    <div className="bottomRelatedBlogsSection">Related Blogs</div>
                    <div className="bottomFeaturedPropertySection">Featured Property</div> */}
                  </div>
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    {/* <div className="blogAdDiv"></div> */}
                    <BlogBodyRightSidebar blog={blogs} />
                  </div>
                </div>
              )}
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
