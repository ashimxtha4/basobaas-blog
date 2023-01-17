import { Icon } from "@iconify/react";
import Navbar from "../../layouts/Navbar";
import BlogNavbar from "../../layouts/BlogNavbar";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import Footer from "../../layouts/Footer";
import { Select } from "antd";
import Link from "next/link";
import CategorySpecificImage1 from "../../public/Images/categorySpecificImage1.svg";
import CategorySpecificImage2 from "../../public/Images/categorySpecificImage2.svg";
import CategorySpecificImage3 from "../../public/Images/categorySpecificImage3.svg";
import CategorySpecificImage4 from "../../public/Images/categorySpecificImage4.svg";
import { Pagination } from "antd";

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
              {/* LOADING SPINNER TO BE ADDED */}
              <div className="categoryBlogBody">
                <div className="leftBodySection">
                  <div className="leftHeaderSection">
                    <div className="categoryHeader">
                      <p className="categoryInfo">श्रेणी</p>
                      <p className="categoryTitle">कानून र नीति</p>
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
                  <div className="paginationSectionContainer">
                    <Pagination
                    className="paginationSection"
                      defaultCurrent={5}
                      pageSize={5}
                      total={50}
                      hideOnSinglePage={true}
                    />
                  </div>
                </div>
                {/* -------------------RIGHT SIDEBAR---------------------- */}
                <div className="rightBodySection">
                  <div className="blogAdDiv">AD</div>
                  <BlogBodyRightSidebar />
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
