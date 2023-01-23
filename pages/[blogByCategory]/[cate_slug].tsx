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
import { fetchBlogs, fetchCategory } from "../../state/actions/actions";
import { BlogByCategoryKeyType } from "../../state/features/blogSlice";

export default function BlogPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<any>();
  const data = useAppSelector((state) => state?.blogData);
  const categories = useAppSelector((state) => state.categoryData.data.items);

  const [currentPage, setcurrentPage] = useState<number>(1);
  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchCategory());

      dispatch(
        fetchBlogs({
          page: currentPage,
          perPage: 6,
          cate_slug: router.query.cate_slug as string,
        })
      );
    }
  }, [dispatch, router.isReady, router.query.cate_slug, currentPage]);

  useEffect(() => {
    if (!!Object.keys(data).length && router.query.cate_slug) {
      const blogData: {} =
        data[router.query.cate_slug as BlogByCategoryKeyType]?.items;
      setValues(blogData);
    }
  }, [router.isReady, router.query, data]);

  return (
    <>
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
          {/* <div className="blogSecNavBlend"></div> */}
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>
          <div className="contentDiv">
            <div className="bodyContainer">
              {/* LOADING SPINNER TO BE ADDED */}
              <div className="categoryBlogBody">
                <div className="leftBodySection">
                  <div className="leftHeaderSection">
                    <div className="categoryHeader">
                      <p className="categoryInfo">श्रेणी</p>
                      <p className="categoryTitle">
                        {
                          categories?.find(
                            (obj: any) =>
                              obj?.cate_slug == router?.query?.cate_slug
                          ).name_np
                        }
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
                          defaultValue="घर जग्गा व्यवसाय"
                          className="subCategorySelect"
                          bordered={false}
                          options={[
                            {
                              value: "realStateBusiness",
                              label: "घर जग्गा व्यवसाय",
                            },
                            {
                              value: "agriculture",
                              label: "कृषि",
                            },
                            {
                              value: "construction",
                              label: "निर्माण सेवा",
                            },
                          ]}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="componentMapSection">
                    {values?.slice(0, 6)?.map((blog: any, index: number) => {
                      return (
                        <Link
                          style={{ transform: "none" }}
                          href={("/blog/" + blog?.cate_slug) as string}
                          key={index}
                        >
                          <CategorySpecificBlog blog={blog} />
                        </Link>
                      );
                    })}
                  </div>
                  <div className="paginationSectionContainer">
                    <Pagination
                      className="paginationSection"
                      defaultCurrent={1}
                      pageSize={6}
                      total={Number(
                        data[router.query.cate_slug as BlogByCategoryKeyType]
                          ?.totalItems
                      )}
                      hideOnSinglePage={true}
                      onChange={(page) => {
                        setcurrentPage(page);
                      }}
                    />
                  </div>
                </div>
                {/* -------------------RIGHT SIDEBAR---------------------- */}
                <div className="rightBodySection">
                  <div className="blogAdDiv">AD</div>
                  {categories!=undefined}
                  <BlogBodyRightSidebar relatedBlogData={categories?.find((obj:any)=>obj.cate_slug==router?.query?.cate_slug).id} />
                </div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
