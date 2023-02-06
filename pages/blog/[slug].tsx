import { Icon } from "@iconify/react";
import Link from "next/link";
import Navbar from "../../layouts/Navbar";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import Footer from "../../layouts/Footer";
import Image from "next/image";
import LawAndPolicy from "../../components/ui/LawAndPolicy";
import DetailProperty from "../../components/ui/detailProperty";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../state";
import {
  fetchBlogs,
  fetchCategory,
  fetchPremiumProperties,
} from "../../state/actions/actions";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { dateFormatter } from "../../utilities/helper";
import { Button, Modal } from "antd";
import SocialMedia from "../../components/ui/socialMedia";
import { PageAndTitleDesc } from "../../utilities/PageAndTitleDesc";
import { GetServerSideProps } from "next";
import { setBlogBySlug } from "../../state/features/blogSlice";
import Skeleton from "../../components/ui/skeleton";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { slug } = query;
  const getDataFromServerSide = await (
    await fetch(
      (process.env.NEXT_PUBLIC_APP_API_URL as string) +
        `collections/blogs/records?filter=(slug='${slug}')`
    )
  ).json();

  const dataItem = getDataFromServerSide?.items[0];
  return {
    props: {
      data: getDataFromServerSide || null,
      title: dataItem?.title_en,
      des: dataItem?.content.slice(0, 100),
      categoryId: dataItem?.category,
    },
  };
};
type pageProps = {
  data: any[] | [];
  title: string;
  desc: string;
  categoryId: string;
};
export default function BlogPage({
  data: serverSideData,
  title,
  desc,
  categoryId,
}: pageProps) {
  const firstRender = useRef(true);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state?.blogData?.blogBySlug?.items);
  const loading = useAppSelector((state) => state?.blogData?.loading);

  const relatedData = useAppSelector(
    (state) => state?.blogData?.blogByCategoryId?.items
  );
  const categoryList = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );

  const [getCategorySlug, setGetCategorySlug] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      dispatch(setBlogBySlug(serverSideData));
      dispatch(fetchCategory());
    }
  }, [dispatch, serverSideData]);
  useEffect(() => {
    if (data?.length) {
      dispatch(
        fetchBlogs({
          categoryId: data[0].category,
        })
      );
      dispatch(fetchPremiumProperties());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (categoryList?.length) {
      const findCategory = categoryList?.find(
        (obj: any) => obj?.id == relatedData[0]?.category
      )?.cate_slug;
      if (relatedData?.length) setGetCategorySlug(findCategory);
    }
  }, [categoryList, relatedData]);

  console.log(data, data?.category);

  return (
    <>
      <PageAndTitleDesc title={title} desc={desc} />
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
                  {
                    loading == "loading" ? (
                      <Skeleton />
                    ) : (
                  data?.map((item: any, index: number) => {
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
                                {/* PARENT CATEGORY MAP SECTION */}
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
                                    {dateFormatter(
                                      moment(`${item?.created}`).fromNow()
                                    )}
                                  </div>
                                </div>
                                <Button
                                  type="primary"
                                  className="shareButton"
                                  onClick={() => setOpen(true)}
                                >
                                  <Icon
                                    icon="ri:share-forward-fill"
                                    color="white"
                                    width="20"
                                    height="20"
                                  />
                                  Share
                                </Button>
                                <Modal
                                  title="Share your favrout blog"
                                  centered
                                  open={open}
                                  onOk={() => setOpen(false)}
                                  onCancel={() => setOpen(false)}
                                  width={"fit-content"}
                                  className="popUp"
                                >
                                  <SocialMedia methode={setOpen} />
                                </Modal>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="blogDetailsComponentSection">
                          <div className="blogDetails">
                            <div className="blogDetailsThumbnail">
                              {loading == "loading" ? (
                                <Skeleton />
                              ) : (
                                <Image
                                  src={`${
                                    process.env
                                      .NEXT_PUBLIC_APP_IMG_URL as string
                                  }${item?.id}/${item?.images[0]}`}
                                  height={408}
                                  width={830}
                                  alt="blogDetails"
                                  priority
                                  loading={"eager"}
                                  quality={75}
                                />
                              )}
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
                  }))}
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    <div className="blogAdDiv">AD</div>
                    <BlogBodyRightSidebar relatedBlogData={categoryId} />
                  </div>
                </div>
                <div className="blogDetailsFooterRelatedBlogs">
                  <div className="lawPolicyDiv">
                    <LawAndPolicy
                      title="सम्बन्धित ब्लगहरू"
                      cate_slug={getCategorySlug}
                      data={relatedData
                        .filter((item: any, index: number) => {
                          return item?.id !== data?.id;
                        })
                        .slice(0, 10)}
                    />
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
