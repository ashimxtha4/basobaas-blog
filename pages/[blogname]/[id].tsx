import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogNavbar from "../../layouts/BlogNavbar";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import Navbar from "../../layouts/Navbar";
import { Select } from "antd";

export default function BlogPage() {
  //STATE FOR BLOGS
  const [blogs, setBlogs] = useState<any[]>([]);

  //STATE FOR BLOG COUNT
  const [blogCount, setBlogCount] = useState<number>(0);

  //STATE FOR LOADING
  const [loading, setLoading] = useState<boolean>(true);

  //STATE FOR SKIP
  const [skip, setSkip] = useState<number>(0);

  //STATE FOR LIMIT
  const [limit, setLimit] = useState<number>(1);

  //STATE FOR CURRENT PAGE INDICATION
  const [currentPage, setCurrentPage] = useState<number>(1);

  //STATE FOR PAGE NUMBERS
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(blogCount / limit); i++) {
    pageNumber.push(i);
  }

  //FUNCTION TO GET ALL BLOGS BY CATEGORY
  const getAllBlogsByCat = async (query: {
    category: string;
    limit?: string | number;
    page?: string | number;
    sort?: string;
  }) => {
    //FUNCTION TO PREPARE QUERY
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
      const { blogs, blogCount } = await getAll(
        "/blogs" + prepareUrlQuery(query)
      );
      setLoading(false);
      setBlogCount(blogCount);

      if (blogs) setBlogs(blogs);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //FOR USE EFFECT HANDLING
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (router.isReady) {
      getAllBlogsByCat({
        category: query.id as string,
      });
    }
  }, [router.isReady, query.id]);

  //FUNCTION FOR SORT BY
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    getAllBlogsByCat({
      category: query.id as string,
      sort: value,
    });
  };

  //FUNCTION FOR PAGE PREVIOUS CLICK

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(Number(currentPage - 1));
      getAllBlogsByCat({
        category: query.id as string,
        limit: limit as number,
        page: currentPage,
      });
    }
  };

  //FUNCTION FOR PAGE NUMBER CLICK
  const handleClick = (e: any) => {
    const { value } = e.target;
    setCurrentPage(Number(value));
    getAllBlogsByCat({
      category: query.id as string,
      limit: limit as number,
      page: value,
    });
  };

  //FUNCTION FOR PAGE NEXT CLICK
  const handleNextClick = () => {
    if (currentPage >= 1) {
      setCurrentPage(Number(currentPage + 1));
      getAllBlogsByCat({
        category: query.id as string,
        limit: limit as number,
        page: currentPage,
      });
    }
  };

  return (
    <>
      <div className="alignmentContainer">
        <div className="navBlend">
          <Navbar />
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
                  <div className="leftBodySection">
                    <div className="leftHeaderSection">
                      <div className="categoryHeader">
                        <p className="categoryInfo">क्याटीगोरी</p>
                        <p className="categoryTitle">
                          {/* {blogs[0]?.category?.name} */}
                          Market Updates
                        </p>
                      </div>
                      <div className="sortSection">
                        <span className="sortTitle">Sort By :</span>
                        <span className="sortButton">
                          {/* <select
                            name="sort"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            defaultValue={blogs[0]?.subCategory?._id}
                            className="subCategorySelect" */}
                          {/* aria-label=".form-select-sm example" */}
                          {/* > */}
                          {/* {blogs?.map((i, k) => {
                              return ( */}
                          {/* <option value={i.subCategory?._id} key={k}> */}
                          {/* {i.subCategory?.name} */}
                          {/* Realestate business */}
                          {/* </option> */}
                          {/* ); */}
                          {/* })} */}
                          {/* </select> */}
                          {/* <Icon */}
                          {/* icon="ph:caret-down-bold" */}
                          {/* color="#4f4f4f" width="20" height="20" */}
                          {/* className="selectArrow" */}
                          {/* /> */}
                          <Select
                            suffixIcon={
                              <Icon
                                icon="ph:caret-down-bold"
                                color="#4f4f4f"
                                width="20"
                                height="20"
                                className="selectArrow"
                              />
                            }
                            defaultValue="Realstate Business"
                            className="subCategorySelect"
                            bordered={false}
                            options={[
                              {
                                value: "realStateBusiness",
                                label: "Realstate Business",
                              },
                              {
                                value: "handicraft",
                                label: "Handicraft",
                              },
                              {
                                value: "textiles",
                                label: "Textiles",
                              },
                            ]}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="componentMapSection">
                      {/* {blogs.map((i, index) => {
                        return( 
                        <CategorySpecificBlog key={index} blog={i} />
                        )
                      })} */}
                      <CategorySpecificBlog />
                      <CategorySpecificBlog />
                      <CategorySpecificBlog />
                      <CategorySpecificBlog />
                      <CategorySpecificBlog />
                      <CategorySpecificBlog />
                    </div>
                    <nav
                      aria-label="Page navigation example"
                      className="paginationSection"
                    >
                      {blogCount >= limit ? (
                        <ul className="pagination pageNumberArea">
                          <li className="page-item pageIndexIcon">
                            <a
                              className="page-link pageIconContainer"
                              href="#"
                              aria-label="Previous"
                            >
                              <span
                                className="pageNumberIcon"
                                aria-hidden="true"
                                onClick={handlePreviousClick}
                              >
                                <Icon
                                  icon="material-symbols:chevron-left"
                                  color="#c4cdd5"
                                  width="24"
                                  inline={true}
                                />
                              </span>
                            </a>
                          </li>
                          {pageNumber.map((item, index) => {
                            return (
                              <li
                                className={`page-item pageIndex ${
                                  item === currentPage
                                    ? "activePage"
                                    : "pageIndex"
                                }`}
                                key={index}
                              >
                                <button
                                  className="page-link pageNumber"
                                  value={item}
                                  onClick={(e) => {
                                    handleClick(e);
                                  }}
                                >
                                  {item}
                                </button>
                              </li>
                            );
                          })}

                          <li className="page-item pageIndexIcon">
                            <a
                              className="page-link pageIconContainer"
                              href="#"
                              aria-label="Next"
                            >
                              <span
                                className="pageNumberIcon"
                                aria-hidden="true"
                                onClick={handleNextClick}
                              >
                                <Icon
                                  icon="material-symbols:chevron-right"
                                  color="#c4cdd5"
                                  width="24"
                                  height="24"
                                  inline={true}
                                />
                              </span>
                            </a>
                          </li>
                        </ul>
                      ) : null}
                    </nav>
                  </div>
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    <div className="blogAdDiv"></div>
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
