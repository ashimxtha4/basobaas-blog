import { Icon } from "@iconify/react";
import Navbar from "../../layouts/Navbar";
import BlogNavbar from "../../layouts/BlogNavbar";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import Footer from "../../layouts/Footer";
import { Select } from "antd";
import Link from "next/link";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../state";
import {
  fetchBlogs,
  fetchCategory,
  fetchPremiumProperties,
} from "../../state/actions/actions";
import { BlogByCategoryKeyType } from "../../state/features/blogSlice";
import { PageAndTitleDesc } from "../../utilities/PageAndTitleDesc";

export default function BlogPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<any>();
  const data = useAppSelector((state) => state?.blogData);
  const loading = useAppSelector((state) => state?.blogData?.loading);
  const categories = useAppSelector((state) => state.categoryData.data.items);

  const [currentPage, setcurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchCategory());
      if (router.query.blogByCategory == "category") {
        dispatch(
          fetchBlogs({
            page: currentPage,
            perPage: 6,
            cate_slug: router.query.cate_slug as string,
            sort: sortBy,
          })
        );
      } else if (router.query.blogByCategory == "search") {
        dispatch(
          fetchBlogs({
            page: currentPage,
            perPage: 6,
            keyword: router.query.cate_slug as string,
          })
        );
      }
    }
  }, [
    dispatch,
    router.isReady,
    router.query.cate_slug,
    router.query.blogByCategory,
    currentPage,
    sortBy,
  ]);

  useEffect(() => {
    if (!!Object.keys(data).length && router.query.cate_slug) {
      const blogData: any =
        router?.query?.blogByCategory == "search"
          ? data["search"].items
          : data[router?.query?.cate_slug as BlogByCategoryKeyType]?.items;
      setValues(blogData);
    }
    dispatch(fetchPremiumProperties());
  }, [dispatch, router.isReady, router.query, data]);

  const handleSortChange = (e: any) => {
    setSortBy(e);
  };

  let title = "";
  if (router.query.blogByCategory == "category") {
    let titleNameFromQuery = router.query.cate_slug as string;
    let titlePrepare =
      titleNameFromQuery.charAt(0).toUpperCase() +
      titleNameFromQuery.slice(1).replaceAll("_", " ");
    title = `Basobaas News - ${titlePrepare}`;
  } else if (router.query.blogByCategory == "search") {
    let titlePrepare = `Basobaas News - ${router.query.cate_slug}`;
    title = titlePrepare;
  }

  return (
    <>
      <PageAndTitleDesc
        title={title}
        desc={
          "Basobaas Insights is your go-to place for real estate investment trends, property market analysis, lifestyle, home decor tips, tourism, and much more in Nepal."
        }
      />
      <div className="navBlend">
        <Navbar />
      </div>
      <div className="secNavDivWrapper">
        <div className="secNavDiv">
          <BlogNavbar />
        </div>
      </div>
      <div className="catAlignmentContainer">
        <div className="blogContainerDiv">
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>
          <div className="contentDiv">
            {router.query.blogByCategory == "search" &&
            loading == "success" &&
            values?.length <= 0 ? (
              <div className="errorMessageContainer">
                <div className="errorMessageSection">
                  <Icon
                    icon="mdi:warning-circle-outline"
                    color="#ffffff"
                    width="100"
                    height="100"
                  />
                  <p className="errorMessage">
                    Oops! Looks like there are no such blogs that match this
                    request.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bodyContainer">
                {/* LOADING SPINNER TO BE ADDED */}
                <div className="categoryBlogBody">
                  <div className="leftBodySection">
                    {router.query.blogByCategory == "search" ? null : (
                      <div className="leftHeaderSection">
                        <div className="categoryHeader">
                          <p className="categoryInfo">श्रेणी</p>
                          <p className="categoryTitle">
                            {router?.query?.blogByCategory
                              ? categories?.find(
                                  (obj: any) =>
                                    obj?.cate_slug == router?.query?.cate_slug
                                )?.name_np
                              : router?.query?.cate_slug}
                          </p>
                        </div>
                        <div className="sortSection">
                          <span className="sortTitle">क्रमबद्ध गर्नुहोस्:</span>
                          <span className="sortButton">
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
                              defaultValue="नयाँ पहिले देखाउनुहोस्"
                              className="subCategorySelect"
                              bordered={false}
                              options={[
                                {
                                  value: "-created",
                                  label: "नयाँ पहिले देखाउनुहोस्",
                                },
                                {
                                  value: "created",
                                  label: "पुरानो पहिले देखाउनुहोस्",
                                },
                              ]}
                              onChange={(e) => {
                                handleSortChange(e);
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="componentMapSection">
                      {loading == "loading" ? (
                        <>
                          <CategorySpecificBlog blog={undefined} />
                          <CategorySpecificBlog blog={undefined} />
                        </>
                      ) : (
                        values?.slice(0, 6)?.map((blog: any, index: number) => {
                          return (
                            <Link
                              style={{ transform: "none" }}
                              href={("/blog/" + blog?.slug) as string}
                              key={index}
                            >
                              <CategorySpecificBlog blog={blog} />
                            </Link>
                          );
                        })
                      )}
                    </div>
                    {loading == "success" &&
                    data[router.query.cate_slug as BlogByCategoryKeyType]?.items
                      ?.length > 0 ? (
                      <div className="paginationSectionContainer">
                        <Pagination
                          className="paginationSection"
                          defaultCurrent={1}
                          current={currentPage}
                          pageSize={6}
                          total={Number(
                            data[
                              router.query.cate_slug as BlogByCategoryKeyType
                            ]?.totalItems
                          )}
                          hideOnSinglePage={true}
                          onChange={(page) => {
                            setcurrentPage(page);
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    <div className="blogAdDiv">AD</div>
                    {categories != undefined}
                    <BlogBodyRightSidebar
                      relatedBlogData={
                        categories?.find(
                          (obj: any) =>
                            obj.cate_slug == router?.query?.cate_slug
                        )?.id
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
