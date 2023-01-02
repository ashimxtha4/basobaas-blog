import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { getAll } from "../../apiFetch/homePage/homePageAPI";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [skip, setSkip] = useState<number>(0);

  const [limit, setLimit] = useState<number>(1);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(blogs.length / limit); i++) {
    pageNumber.push(i);
  }

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

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (router.isReady) {
      getAllBlogsByCat({
        category: query.id as string,
      });
    }
  }, [router.isReady, query.id]);
  // console.log(blogs);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    getAllBlogsByCat({
      category: query.id as string,
      sort: value,
    });
  };

  const handleClick = (e: any) => {
    const { value } = e.target;
    getAllBlogsByCat({
      category: query.id as string,
      limit: limit as number,
      page: value,
    });
  };

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
          ) : !blogs.length ? (
            <h1>No Blogs Found</h1>
          ) : (
            <div className="leftBodySection">
              <div className="leftHeaderSection">
                <div className="categoryHeader">
                  <p className="categoryInfo">Category</p>
                  <p className="categoryTitle">{blogs[0]?.category?.name}</p>
                </div>
                <div className="sortSection">
                  <span className="sortTitle">Sort By:</span>
                  <span className="sortButton">
                    <select
                      name="sort"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      defaultValue={blogs[0]?.subCategory?._id}
                      className="subCategorySelect"
                      // aria-label=".form-select-sm example"
                    >
                      {blogs?.map((i, k) => {
                        return (
                          <option value={i.subCategory?._id} key={k}>
                            {i.subCategory?.name}
                          </option>
                        );
                      })}
                    </select>
                    <Icon
                      className="selectArrow"
                      icon="ri:arrow-drop-down-line"
                      width="30"
                      height="30"
                    />
                  </span>
                </div>
              </div>
              <div className="componentMapSection">
                {blogs.map((i, index) => {
                  return <CategorySpecificBlog key={index} blog={i} />;
                })}
              </div>
              <nav
                aria-label="Page navigation example"
                className="paginationSection"
              >
                {blogs.length > limit ? (
                  <ul className="pagination pageNumberArea">
                    <li className="page-item pageIndex">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    {pageNumber.map((item, index) => {
                      return (
                        <li className="page-item pageIndex" key={index}>
                          <button
                            className="page-link"
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

                    <li className="page-item pageIndex">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                ) : null}
              </nav>
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
