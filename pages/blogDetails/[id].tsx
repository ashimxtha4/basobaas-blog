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
export default function BlogPage() {
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
                            </span>
                            <span className="catSubCatNames">
                              <Link href="#">कानून र नीति</Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="blogDetailsTitle">
                        <div className="blogSubCategoryTitle">कानून र नीति</div>

                        <div className="blogTitleAndAuthor">
                          <div className="blogTitle">
                            सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो
                            क्षेत्र।
                          </div>
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
                              <div className="posted"></div>
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
                      <div className="blogDetails">
                        <div className="blogDetailsThumbnail">
                          <Image src={blogDetailsImage3} alt="blogDetails" />
                        </div>
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
                            src={blogDetailsImage}
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
                    <BlogBodyRightSidebar />
                  </div>
                </div>
                <div className="blogDetailsFooterRelatedBlogs">
                  <div className="lawPolicyDiv">
                    <LawAndPolicy title="सम्बन्धित ब्लगहरू" />
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
