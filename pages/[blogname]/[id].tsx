import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogNavbar from "../../layouts/BlogNavbar";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import Navbar from "../../layouts/Navbar";
import { Select } from "antd";
import Footer from "../../layouts/Footer";
import CategorySpecificImage1 from "../../public/Images/categorySpecificImage1.svg";
import CategorySpecificImage2 from "../../public/Images/categorySpecificImage2.svg";
import CategorySpecificImage3 from "../../public/Images/categorySpecificImage3.svg";
import CategorySpecificImage4 from "../../public/Images/categorySpecificImage4.svg";
import Link from "next/link";

const dummyBlogCategories = [
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage1,
    title:
      "नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र,  ७३ प्रतिशत भौतिक प्रगति ।",
    content:
      "नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र गतिमा अघि बढिरहेको छ । पुष २४ सम्ममा सुरूङको भौतिक प्रगति ७३ प्रतिशत हुँदा समग्र भौतिक प्रगति  ४७.९० प्रतिशत पुगेको आयोजनाले जनाएको छ । मुख्य र स्केप टनेलको कुल ५ हजार २४५ मिटर सुरुङ मध्ये हालसम्म ३ हजार ८२९ मिटर सुरुङ खन्ने काम पूरा भएको हो ।",
    author: "आशिम श्रेष्ठ",
    postedOn: "१ घण्टा अघि",
  },
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage2,
    title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र ।",
    content:
      "चिसोयाममा लागेसँगै बजारमा जाडोबाट बच्ने उपायको खोजी हुन थाल्दछ । प्रविधिको प्रयोग बढ्दै गइरहेको बेला कोठाहरूलाई न्यानो बनाउन हिटर जस्ता उपकरणको प्रयोग गरिन्छन् । यसरी बजारमा उपलब्ध सामग्रीको प्रयोग गर्दा फाइदा त छन् नै, तर कतिपय अवस्थामा सावधानी नअपनाउँदा दुर्घटना निम्तिएका खबरहरू पनि बेलाबेला सुन्नमा आउँछन् । आज हामी हिटरको प्रयोग र छनौटमा ध्यान पुर्याउनुपर्ने कुराहरूको चर्चा गर्दैछौं ।",
    author: "कपिल कार्की",
    postedOn: "५ घण्टा अघि",
  },
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage3,
    title: "नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने ।",
    content:
      "नबिल बैंक लिमिटेडले आफ्नो स्वामित्वमा रहेको गैर बैंकिङ सम्पति ब्रिक्री गर्ने भएको छ ।  बैंकले साविक नेपाल बङ्गलादेश बैंक लिमिटेडको स्वामित्वमा रहेको घरजग्गा बिक्री गर्ने भएको हो ।",
    author: "रुद्र कँडेल",
    postedOn: "११ घण्टा अघि",
  },
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage4,
    title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र ।",
    content:
      "चिसोयाममा लागेसँगै बजारमा जाडोबाट बच्ने उपायको खोजी हुन थाल्दछ । प्रविधिको प्रयोग बढ्दै गइरहेको बेला कोठाहरूलाई न्यानो बनाउन हिटर जस्ता उपकरणको प्रयोग गरिन्छन् । यसरी बजारमा उपलब्ध सामग्रीको प्रयोग गर्दा फाइदा त छन् नै, तर कतिपय अवस्थामा सावधानी नअपनाउँदा दुर्घटना निम्तिएका खबरहरू पनि बेलाबेला सुन्नमा आउँछन् । आज हामी हिटरको प्रयोग र छनौटमा ध्यान पुर्याउनुपर्ने कुराहरूको चर्चा गर्दैछौं ।",
    author: "कमल पण्डित",
    postedOn: "२ दिन अघि",
  },
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage1,
    title:
      "महानगरलाई गृह मन्त्रालयको असहयोग, तत्काल सुकुम्बासी बस्ती नहटाइने ।",
    content:
      "अनधिकृत संरचना हटाउने काठमाडौं महानगरको अभियानमा गृह मन्त्रालयले सहयोग नगर्ने भएको छ । थापाथलीस्थित बाग्मती नदी किनारका सुकुम्बासी बस्तीमा डोजर चलाउन सुरक्षा सहयोग माग्दै गत पुस १३ महानगरपालिकाले गृह मन्त्रालयले पत्र लेखेको थियो । पत्रको जवाफ दिँदै गृह मन्त्रालयले छलफल, समन्वय, पूर्वतयारी नभएसम्म प्रक्रिया मिचेर बस्ती हटाउन सहयोग गर्न नसकिने जनाएको छ । ",
    author: "राजन मगर",
    postedOn: "५ दिन अघि",
  },
  {
    categoryTag: "कानून र नीति",
    thumbnail: CategorySpecificImage2,
    title: "सरकारले  मुआब्जा वापतको रकम नदिँदा सडक निर्माण प्रभावित।",
    content:
      "सडक छेउका घरगोठको रकम असोजमा नै मुआब्जा समितिले निर्धारण गरेको थियो । यद्यपि निर्धारित रकम माग गर्ने स्थानीय बढेकाले आयोजनाले क्षतिपूर्ति बापतको रकम दिएर घरगोठ भत्काउन सकेको छैन ।",
    author: "राजन अधिकारी",
    postedOn: "६ दिन अघि",
  },
];
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
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>
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
                        <p className="categoryInfo">श्रेणी</p>
                        <p className="categoryTitle">
                          {/* {blogs[0]?.category?.name} */}
                          कानून र नीति
                        </p>
                      </div>
                      <div className="sortSection">
                        <span className="sortTitle">क्रमबद्ध गर्नुहोस्:</span>
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
                      {/* {blogs.map((i, index) => {
                        return( 
                        <CategorySpecificBlog key={index} blog={i} />
                        )
                      })} */}
                      {dummyBlogCategories?.map((blog, ix) => {
                        return (
                          <Link
                            style={{ transform: "none" }}
                            href="/blogDetails/123"
                            key={ix}
                          >
                            <CategorySpecificBlog blog={blog} />
                          </Link>
                        );
                      })}
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
                    <div className="blogAdDiv">AD</div>
                    <BlogBodyRightSidebar
                    //  blog={blogs}
                    />
                  </div>
                </div>
              )}
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
