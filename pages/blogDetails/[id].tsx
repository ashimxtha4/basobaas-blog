import { getAll } from "../../apiFetch/homePage/homePageAPI";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Navbar from "../../layouts/Navbar";
import { IMG_URL } from "../../baseConstants";
import Footer from "../../layouts/Footer";
import Link from "next/link";
import Image from "next/image";
import blogDetailsImage from "../../public/Images/blogDetailsImage1.svg";
import blogDetailsImage2 from "../../public/Images/blogDetailsImage2.svg";
import blogDetailsImage3 from "../../public/Images/blogDetailsImage3.svg";
import LawAndPolicy from "../../components/ui/LawAndPolicy";
import DetailProperty from "../../components/ui/detailProperty";
export default function BlogPage() {
  //   const [blogs, setBlogs] = useState<any[]>([]);
  //   const [blog, setBlog] = useState<any>(null);
  //   const router = useRouter();

  //   const [loading, setLoading] = useState<boolean>(true);

  //   const getBlogsById = async (id: string) => {
  //     try {
  //       setLoading(true);
  //       const { blog } = await getAll(`/blogs/${id}`);
  //       setLoading(false);

  //       if (blog) setBlog(blog);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };

  //   const getAllBlogsByCat = async (query: {
  //     category: string;
  //     limit?: string | number;
  //     page?: string | number;
  //     sort?: string;
  //   }) => {
  //     function prepareUrlQuery(query: object) {
  //       var queryString = "?";
  //       Object.keys(query).forEach((key: string, index: number) => {
  //         //  @ts-ignore
  //         if (query[key]) {
  //           if (index > 0) {
  //             //  @ts-ignore
  //             queryString += "&" + key + "=" + query[key];
  //           }
  //           //  @ts-ignore
  //           queryString += key + "=" + query[key];
  //         }
  //       });
  //       return queryString;
  //     }

  //     try {
  //       setLoading(true);
  //       const { blogs } = await getAll("/blogs" + prepareUrlQuery(query));
  //       setLoading(false);

  //       if (blogs) setBlogs(blogs);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (router.isReady) {
  //       getBlogsById(router.query.id as string);
  //     }
  //   }, [router.query]);

  //   useEffect(() => {
  //     if (blog) {
  //       getAllBlogsByCat({
  //         category: blog.category.id as string,
  //       });
  //     }
  //   }, [blog]);

  return (
    <>
      <div className="blogDetailsAlignmentContainer">
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
              {/* {loading ? (
                <div
                  className="spinner-border"
                  role="status"
                  style={{ position: "absolute", left: "50%" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : !blogs.length ? (
                <h1>No Blogs Found</h1>
              ) : ( */}
              <div className="categoryBlogBody">
                <div className="blogDetailsMainSection">
                  <div className="blogDetailsLeftBodySection">
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

                            <span className="catSubCatNames">
                              <Link href="#">
                                {/* {blog?.category?.name} */}
                                सल्लाह
                              </Link>
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
                              {/* {blog?.subCategory?.name} */}
                              <Link href="#">
                                {/* {blog?.subCategory?.name} */}
                                कानून र नीति
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="blogDetailsTitle">
                        <div className="blogSubCategoryTitle">
                          {/* {blog?.subCategory?.name} */}
                          कानून र नीति
                        </div>

                        <div className="blogTitleAndAuthor">
                          <div className="blogTitle">
                            {/* {blog?.title} */}
                            सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो
                            क्षेत्र।
                          </div>
                          <div className="blogByAndShare">
                            <div className="blogBy">
                              <div className="author">
                                {/* {blog.author?.fullName} */}
                                राजन अधिकारी
                              </div>
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
                                {/* {blogPostedDate} */}२ हप्ता अघि
                              </div>
                            </div>
                            <button className="shareButton">
                              <Icon
                                icon="ri:share-forward-fill"
                                color="white"
                                width="20"
                                height="20"
                              />{" "}
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blogDetailsComponentSection">
                      {/* <p dangerouslySetInnerHTML={{__html:blog.content}}></p> */}
                      <div className="blogDetails">
                        <div className="blogDetailsThumbnail">
                          {/* <img
                            src={`${IMG_URL as string}` + `${blog?.images[0]}`}
                          /> */}
                          <Image
                            // className="blogDetailsImage"
                            src={blogDetailsImage}
                            alt="blogDetails"
                          />
                        </div>
                        {/* <div
                          className="blogDetailsFromBackend"
                          dangerouslySetInnerHTML={{
                            __html: blog?.content,
                          }}
                        ></div> */}
                        <div className="blogDetailsFromBackend">
                          <p>
                            रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक
                            लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने
                            र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको दिमाग एकै पटक
                            एक लाख ठाउँमा हुने अपेक्षा गरिन्छ। जब यो एउटा यादगार
                            रेस्टुरेन्ट अवधारणा निर्माण र डिजाइन गर्ने कुरा
                            आउँछ, त्यहाँ धेरै छन्। विभिन्न रेस्टुरेन्ट
                            डिजाइनरहरू, ठेकेदारहरू, सल्लाहकारहरू, र विशेषज्ञहरू
                            जसले सबै योगदान गर्नेछन्।
                          </p>
                          <p>
                            त्यहाँ विचार गर्न समयरेखाहरू छन्, धेरै
                            सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको लागि उत्तम
                            अभ्यासहरू। हामी रेस्टुरेन्ट निर्माण गर्नका लागि
                            मुख्य विचारहरू मार्फत हिंड्नेछौं, तपाईंको भविष्यका
                            संरक्षकहरूका लागि सुन्दर, समावेशी ठाउँ निर्माण र
                            डिजाइन गर्ने रणनीतिहरू समावेश गर्दै। विचार गर्नको
                            लागि समयरेखाहरू, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
                            सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू
                            समावेश गर्दै रेस्टुरेन्ट निर्माण गर्ने मुख्य
                            विचारहरू मार्फत हिंड्नेछौं।
                          </p>

                          <Image
                            className="imageInBlogs"
                            src={blogDetailsImage3}
                            alt="blogDetails"
                          />
                          <div className="blogAdSection">Adv</div>
                          <p>
                            रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक
                            लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने
                            र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको दिमाग एकै पटक
                            एक लाख ठाउँमा हुने अपेक्षा गरिन्छ। जब यो एउटा यादगार
                            रेस्टुरेन्ट अवधारणा निर्माण र डिजाइन गर्ने कुरा
                            आउँछ, त्यहाँ धेरै छन्। विभिन्न रेस्टुरेन्ट
                            डिजाइनरहरू, ठेकेदारहरू, सल्लाहकारहरू, र विशेषज्ञहरू
                            जसले सबै योगदान गर्नेछन्।
                          </p>
                          <p>
                            त्यहाँ विचार गर्न समयरेखाहरू छन्, धेरै
                            सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको लागि उत्तम
                            अभ्यासहरू। हामी रेस्टुरेन्ट निर्माण गर्नका लागि
                            मुख्य विचारहरू मार्फत हिंड्नेछौं, तपाईंको भविष्यका
                            संरक्षकहरूका लागि सुन्दर, समावेशी ठाउँ निर्माण र
                            डिजाइन गर्ने रणनीतिहरू समावेश गर्दै। विचार गर्नको
                            लागि समयरेखाहरू, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
                            सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू
                            समावेश गर्दै रेस्टुरेन्ट निर्माण गर्ने मुख्य
                            विचारहरू मार्फत हिंड्नेछौं।
                          </p>
                          <Image
                            className="imageInBlogs"
                            src={blogDetailsImage3}
                            alt="blogDetails"
                          />
                          <div className="blogAdSection">Adv</div>
                          <p>
                            रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक
                            लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने
                            र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको दिमाग एकै पटक
                            एक लाख ठाउँमा हुने अपेक्षा गरिन्छ। जब यो एउटा यादगार
                            रेस्टुरेन्ट अवधारणा निर्माण र डिजाइन गर्ने कुरा
                            आउँछ, त्यहाँ धेरै छन्। विभिन्न रेस्टुरेन्ट
                            डिजाइनरहरू, ठेकेदारहरू, सल्लाहकारहरू, र विशेषज्ञहरू
                            जसले सबै योगदान गर्नेछन्।त्यहाँ विचार गर्न
                            समयरेखाहरू छन्, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणको लागि उत्तम अभ्यासहरू। हामी रेस्टुरेन्ट
                            निर्माण गर्नका लागि मुख्य विचारहरू मार्फत
                            हिंड्नेछौं, तपाईंको भविष्यका संरक्षकहरूका लागि
                            सुन्दर, समावेशी ठाउँ निर्माण र डिजाइन गर्ने
                            रणनीतिहरू समावेश गर्दै। विचार गर्नको लागि
                            समयरेखाहरू, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
                            सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू
                            समावेश गर्दै रेस्टुरेन्ट निर्माण गर्ने मुख्य
                            विचारहरू मार्फत हिंड्नेछौं।रेस्टुरेन्ट निर्माणमा
                            धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर
                            रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र
                            रेस्टुरेन्टहरूको दिमाग एकै पटक एक लाख ठाउँमा हुने
                            अपेक्षा गरिन्छ। जब यो एउटा यादगार रेस्टुरेन्ट
                            अवधारणा निर्माण र डिजाइन गर्ने कुरा आउँछ, त्यहाँ
                            धेरै छन्।
                          </p>
                          <p>
                            विभिन्न रेस्टुरेन्ट डिजाइनरहरू, ठेकेदारहरू,
                            सल्लाहकारहरू, र विशेषज्ञहरू जसले सबै योगदान
                            गर्नेछन्।त्यहाँ विचार गर्न समयरेखाहरू छन्, धेरै
                            सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको लागि उत्तम
                            अभ्यासहरू। हामी रेस्टुरेन्ट निर्माण गर्नका लागि
                            मुख्य विचारहरू मार्फत हिंड्नेछौं, तपाईंको भविष्यका
                            संरक्षकहरूका लागि सुन्दर, समावेशी ठाउँ निर्माण र
                            डिजाइन गर्ने रणनीतिहरू समावेश गर्दै। विचार गर्नको
                            लागि समयरेखाहरू, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
                            सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू
                            समावेश गर्दै रेस्टुरेन्ट निर्माण गर्ने मुख्य
                            विचारहरू मार्फत हिंड्नेछौं।
                          </p>
                          <p>
                            विभिन्न रेस्टुरेन्ट डिजाइनरहरू, ठेकेदारहरू,
                            सल्लाहकारहरू, र विशेषज्ञहरू जसले सबै योगदान
                            गर्नेछन्।त्यहाँ विचार गर्न समयरेखाहरू छन्, धेरै
                            सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको लागि उत्तम
                            अभ्यासहरू। हामी रेस्टुरेन्ट निर्माण गर्नका लागि
                            मुख्य विचारहरू मार्फत हिंड्नेछौं, तपाईंको भविष्यका
                            संरक्षकहरूका लागि सुन्दर, समावेशी ठाउँ निर्माण र
                            डिजाइन गर्ने रणनीतिहरू समावेश गर्दै। विचार गर्नको
                            लागि समयरेखाहरू, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट
                            निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
                            सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू
                            समावेश गर्दै रेस्टुरेन्ट निर्माण गर्ने मुख्य
                            विचारहरू मार्फत हिंड्नेछौं।
                          </p>
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
                  {/* -------------------RIGHT SIDEBAR---------------------- */}
                  <div className="rightBodySection">
                    <div className="blogAdDiv">AD</div>
                    <BlogBodyRightSidebar
                    //  blog={blogs}
                    />
                  </div>
                </div>
                <div className="blogDetailsFooterRelatedBlogs">
                  <div className="lawPolicyDiv">
                    <LawAndPolicy title="सम्बन्धित ब्लगहरू" />
                    {/* id={data?.categories[4]?.id}  YO MILAUNU XA */}
                  </div>
                  <DetailProperty />
                </div>
              </div>
              {/* )} */}
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
