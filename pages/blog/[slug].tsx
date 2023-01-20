import { Icon } from "@iconify/react";
import Link from "next/link";
import Navbar from "../../layouts/Navbar";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import Footer from "../../layouts/Footer";
import Image from "next/image";
import blogDetailsImage from "../../public/Images/blogDetailsImage1.svg";
import blogDetailsImage3 from "../../public/Images/blogDetailsImage3.svg";
import LawAndPolicy from "../../components/ui/LawAndPolicy";
import DetailProperty from "../../components/ui/detailProperty";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../state";
import { fetchBlogs, fetchCategory } from "../../state/actions/actions";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
export default function BlogPage() {
  const firstRender = useRef(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => {
    return state?.blogData?.blogBySlug?.items;
  });
  const categoryList = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );
  useEffect(() => {
    if (router.isReady) {
      if (firstRender.current) {
        firstRender.current = false;
        dispatch(
          fetchBlogs({
            page: 1,
            perPage: 1,
            slug: router.query.slug as string,
          })
        );
        dispatch(fetchCategory());
      }
    }
  }, [dispatch, router.isReady, router.query.slug]);

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
      <div className="blogDetailsAlignmentContainer">
        <div className="blogContainerDiv">
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>
          <div className="contentDiv">
            <div className="bodyContainer">
              <div className="categoryBlogBody">
                <div className="blogDetailsMainSection">
                  {data?.map((item: any, index: number) => {
                    return (
                      <div className="blogDetailsLeftBodySection" key={index}>
                        <div className="leftHeaderSection">
                          <div className="blogDetailsCategoryHeader">
                            <div className="categoryInfo">
                              <div className="catAndSubCat">
                                <span className="catSubCatNames">
                                  <Link href="/">होम</Link>
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

                                {/* <span className="catSubCatNames">
                            <Link href="#">सल्लाह</Link>
                          </span>
                          <span>
                            <Icon
                              icon="material-symbols:chevron-right"
                              color="#969696"
                              width="20"
                              height="20"
                              inline={true}
                            />{" "}
                          </span> */}
                                <span className="catSubCatNames">
                                  <Link href="#">
                                    {
                                      categoryList?.find(
                                        (obj: any) => obj.id == item?.category
                                      )?.name_np
                                    }
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="blogDetailsTitle">
                            <div className="blogSubCategoryTitle">
                              {categoryList?.find(
                                (obj: any) => obj.id == item?.category?.name_np
                              )}
                            </div>
                            <div className="blogTitleAndAuthor">
                              <div className="blogTitle">{item?.title_np}</div>
                              <div className="blogByAndShare">
                                <div className="blogBy">
                                  <div className="author">राजन अधिकारी</div>
                                  <div className="separator">
                                    <Icon
                                      icon="ci:dot-05-xl"
                                      width="15"
                                      height="15"
                                      color="#333333"
                                    />
                                  </div>
                                  <div className="posted">
                                    {moment(`${item?.created}`).fromNow()}
                                  </div>
                                </div>
                                <button className="shareButton">
                                  <Icon
                                    icon="ri:share-forward-fill"
                                    color="white"
                                    width="20"
                                    height="20"
                                  />
                                  Share
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="blogDetailsComponentSection">
                          <div className="blogDetails">
                            <div className="blogDetailsThumbnail">
                              <Image
                                src={blogDetailsImage3}
                                alt="blogDetails"
                              />
                            </div>
                            <div className="blogDetailsFromBackend">
                              {item?.content}
                            </div>
                          </div>
                        </div>
                        <div className="topSearch">
                          <p className="topSearchHeader">Top Searches</p>
                          <ul>
                            <li>
                              <Link className="listedItems" href="#">
                                expensive houses in lalitpur
                              </Link>
                            </li>
                            <li>
                              <Link className="listedItems" href="#">
                                Cheap houses in kathmandu
                              </Link>
                            </li>
                            <li>
                              <Link className="listedItems" href="#">
                                Home loan
                              </Link>
                            </li>
                            <li>
                              <Link className="listedItems" href="#">
                                market updates
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    <div className="blogAdDiv">AD</div>
                    <BlogBodyRightSidebar />
                  </div>
                </div>
                <div className="blogDetailsFooterRelatedBlogs">
                  <div className="lawPolicyDiv">
                    <LawAndPolicy title="सम्बन्धित ब्लगहरू"  data={data}/>
                  </div>
                  <DetailProperty />
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
