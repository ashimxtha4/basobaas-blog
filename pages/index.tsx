import Link from "next/link";
import Navbar from "../layouts/Navbar";
import BlogNavbar from "../layouts/BlogNavbar";
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall";
import HomeBlogTypeMain from "../components/ui/HomeBlogTypeMain";
import MarketNewsTypeMain from "../components/ui/MarketNewsTypeMain";
import MarketNewsTypeSecondary from "../components/ui/MarketNewsTypeSecondary";
import LifeStyle from "../components/ui/LifeStyle";
import HomeLoan from "../components/ui/HomeLoan";
import OurThoughts from "../components/ui/OurThoughts";
import LawAndPolicy from "../components/ui/LawAndPolicy";
import MainProperty from "../components/ui/MainProperty";
import BottomComponent from "../components/ui/bottomComponent";
import Footer from "../layouts/Footer";
import downImage from "../public/Images/downImage.svg";
import downImage1 from "../public/Images/downImage1.svg";
import downImage2 from "../public/Images/downImage2.svg";
import downImage3 from "../public/Images/downImage3.svg";
import downImage4 from "../public/Images/downImage4.svg";
import downImage5 from "../public/Images/downImage5.svg";
import RelatedBlogImage1 from "../public/Images/relatedBlogsImage1.svg";
import RelatedBlogImage2 from "../public/Images/relatedBlogsImage2.svg";
import RelatedBlogImage3 from "../public/Images/relatedBlogsImage3.svg";
import FeaturedPropertyImage1 from "../public/Images/featuredPropertyImage1.svg";
import FeaturedPropertyImage2 from "../public/Images/featuredPropertyImage2.svg";
import FeaturedPropertyImage3 from "../public/Images/featuredPropertyImage3.svg";
import FeaturedPropertyImage4 from "../public/Images/featuredPropertyImage4.svg";
import LifestyleImages from "../public/Images/LifestyleImages.svg";
import Head from "next/head";
import { useAppSelector, useAppDispatch, store } from "../state";
import { useEffect, useRef } from "react";
import {
  fetchBlogs,
  fetchCategory,
  fetchVideos,
} from "../state/actions/actions";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.blogData);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 1,
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 1,
          category:'Lifestyle'
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 1,
          category:'Market News'
        })
      );
      dispatch(fetchCategory());
      dispatch(fetchVideos());
    }
  }, [dispatch]);

  //DUMMY DATA FOR RELATED BLOGS
  const dummyRelatedBlogsData: any = [
    {
      thumbnail: RelatedBlogImage1,
      categoryTag: "यात्रा",
      title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
    },
    {
      thumbnail: RelatedBlogImage2,
      categoryTag: "जीवनशैली",
      title: "नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।",
    },
    {
      thumbnail: RelatedBlogImage3,
      categoryTag: "बजार खबर",
      title:
        "रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको।",
    },
    {
      thumbnail: FeaturedPropertyImage3,
      categoryTag: "कानून र नीति",
      title:
        "नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र,  ७३ प्रतिशत भौतिक प्रगति।",
    },
  ];

  //DUMMY DATA FOR FEATURED PROPERTY
  const dummyPropertyData: any = [
    {
      photo: FeaturedPropertyImage3,
      title: "Padma Colony",
      address: "Sitapaila Rd 5, Nagarjun 44600",
      beds: 4,
      bath: 5,
      sqft: 1790,
      price: "5.75 Crore",
      priceLabel: "Total Price",
    },
    {
      photo: FeaturedPropertyImage4,
      title: "Karyabinayak Homes",
      address: "Karyabinayak, Lalitpur",
      beds: 2,
      bath: 1,
      sqft: 1200,
      price: "20 Thousand",
      priceLabel: "sq.ft",
    },
    {
      photo: FeaturedPropertyImage2,
      title: "Civil Homes",
      address: "Kalimati, Kathmandu",
      beds: 3,
      bath: 3,
      sqft: 3200,
      price: "3.55 Crore",
      priceLabel: "Onwards",
    },
    {
      photo: LifestyleImages,
      title: "Ranjana Complex",
      address: "New-Road, Kathmandu",
      beds: 0,
      bath: 0,
      sqft: 3651,
      price: "50 Lakhs",
      priceLabel: "month",
    },
    {
      photo: FeaturedPropertyImage1,
      title: "Vinayak Colony",
      address: "Bhaisipati, Lalitpur",
      beds: 5,
      bath: 4,
      sqft: 4200,
      price: "9.5 Crore",
      priceLabel: "Total Price",
    },
  ];

  const dummyPropertyData2: any = [
    {
      photo: FeaturedPropertyImage3,
      title: "Padma Colony",
      address: "Sitapaila Rd 5, Nagarjun 44600",
      beds: 4,
      bath: 5,
      sqft: 1790,
      price: "5.75 Crore",
      priceLabel: "Total Price",
    },
    {
      photo: FeaturedPropertyImage4,
      title: "Karyabinayak Homes",
      address: "Karyabinayak, Lalitpur",
      beds: 2,
      bath: 1,
      sqft: 1200,
      price: "20 Thousand",
      priceLabel: "sq.ft",
    },
    {
      photo: FeaturedPropertyImage2,
      title: "Civil Homes",
      address: "Kalimati, Kathmandu",
      beds: 3,
      bath: 3,
      sqft: 3200,
      price: "3.55 Crore",
      priceLabel: "Onwards",
    },
    {
      photo: FeaturedPropertyImage1,
      title: "Ranjana Complex",
      address: "New-Road, Kathmandu",
      beds: 0,
      bath: 0,
      sqft: 3651,
      price: "50 Lakhs",
      priceLabel: "month",
    },
    {
      photo: LifestyleImages,
      title: "Vinayak Colony",
      address: "Bhaisipati, Lalitpur",
      beds: 5,
      bath: 4,
      sqft: 4200,
      price: "9.5 Crore",
      priceLabel: "Total Price",
    },
  ];

  const { value } = useAppSelector((state) => state.blogData);

  return (
    <>
      <Head>
        <title>
          Basobaas News - Real Estate News, Reports & Lifestyle In Nepal
        </title>
        <meta
          property="og:title"
          content="Basobaas News - Real Estate News, Reports & Lifestyle In Nepal"
          key="title"
        />
      </Head>
      <div className="navBlend">
        <Navbar />
      </div>
      <div className="aboveNavDivWrapper">
        <div className="aboveNavDiv">
          <div className="newsDiv">
            <div className="newsHeader">
              बसोबास <span className="newsSubHeading">समाचार र लेख</span>
            </div>
            <div className="newsTexts">
              हामी तपाईंलाई घर जग्गा बारे पूर्ण समाचार प्रदान गर्दछौं।
            </div>
          </div>

          <div className="firstAdDiv"></div>
        </div>
      </div>
      <div className="secNavDivWrapper">
        <div className="secNavDiv">
          <BlogNavbar />
        </div>
      </div>

      <div className="alignmentContainer">
        <div className="containerDiv">
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>

          <div className="contentDiv">
            <div className="contentBody">
              <div className="blogPreviewDiv">
                <div className="bigComponent">
                  <HomeBlogTypeMain />
                </div>
                <div className="smallComponentDiv">
                  {dummyRelatedBlogsData.map((data: any, index: number) => (
                    <div className="smallComponent" key={index}>
                      <HomeBlogTypeSmall data={data} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="adDivs">Ad Div</div>

              <div className="marketNewsDiv">
                <div className="titleDiv">
                  <label className="title">बजार खबर</label>
                  <span className="viewAllButton">सबै हेर्नुहोस्</span>
                </div>
                <div className="marketNewsContentDiv">
                  <div className="marketBigComponent">
                    <MarketNewsTypeMain />
                  </div>
                  <div className="marketSmallComponentDiv">
                    {dummyRelatedBlogsData
                      .splice(0, 3)
                      .map((data: any, index: number) => (
                        <div className="marketSmallComponent" key={index}>
                          <MarketNewsTypeSecondary data={data} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="adDivs">Ad Div</div>

              <div className="propertyListDiv">
                <div className="propertyListTitleDiv">
                  <label className="propertyListTitle">
                    सम्बन्धित घर जग्गाहरु
                  </label>
                  <span className="propertyListViewAllButton">
                    <Link
                      className="propertyViewLink"
                      href="https://basobaas.com/properties/all-properties"
                    >
                      सबै हेर्नुहोस्
                    </Link>
                  </span>
                </div>
                <div className="propertyCardDiv">
                  {dummyPropertyData.map((data: any, index: number) => (
                    <div className="propertyCard" key={index}>
                      <MainProperty data={data} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lifeStyleDiv">
                <LifeStyle />
              </div>

              <div className="flexTwo">
                <div className="homeLoanDiv">
                  <HomeLoan />
                </div>

                <div className="ourThoughtsDiv">
                  <OurThoughts />
                </div>
              </div>

              <div className="propertyListDiv">
                <div className="propertyListTitleDiv">
                  <label className="propertyListTitle">विशेष घर जग्गाहरु</label>
                  <span className="propertyListViewAllButton">
                    <Link
                      className="propertyViewLink"
                      href="https://basobaas.com/properties/premium-properties"
                    >
                      सबै हेर्नुहोस्
                    </Link>
                  </span>
                </div>
                <div className="propertyCardDiv">
                  {dummyPropertyData2.map((data: any, index: number) => (
                    <div className="propertyCard" key={index}>
                      <MainProperty data={data} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flexTwo">
                <div className="lawPolicyDiv">
                  <LawAndPolicy title="कानून र नीति" />
                </div>

                <div className="lawPolicy2Div">
                  <div className="lawPolicy2TitleDiv">
                    <label className="lawPolicy2Title">बजार अद्यावधिकहरू</label>
                    <span className="lawPolicy2ViewAllButton">
                      सबै हेर्नुहोस्
                    </span>
                  </div>
                  <div className="lawPolicy2CardDiv">
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage}
                        title="सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।"
                      />
                    </div>
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage1}
                        title="नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।"
                      />
                    </div>
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage2}
                        title="रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको।"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexThree">
                <div className="flexThreeChild1Div">
                  <div className="flexThreeChild1TitleDiv">
                    <label className="flexThreeChild1Title">
                      बजार अद्यावधिकहरू
                    </label>
                    <span className="flexThreeChild1ViewAllButton">
                      सबै हेर्नुहोस्
                    </span>
                  </div>
                  <div className="flexThreeChild1CardDiv">
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage}
                        title="सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।"
                      />
                    </div>
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage1}
                        title="नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।"
                      />
                    </div>
                    <div className="lawPolicy2Card">
                      <BottomComponent
                        image={downImage2}
                        title="रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको।"
                      />
                    </div>
                  </div>
                </div>

                <div className="flexThreeChildDiv">
                  <div className="flexThreeChildTitleDiv">
                    <label className="flexThreeChildTitle">
                      बासोबास राउन्डअप
                    </label>
                    <span className="flexThreeChildViewAllButton">
                      सबै हेर्नुहोस्
                    </span>
                  </div>
                  <div className="flexThreeChildCardDiv">
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage3}
                        title="रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको।"
                      />
                    </div>
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage4}
                        title="नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र,  ७३ प्रतिशत भौतिक प्रगति।"
                      />
                    </div>
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage5}
                        title="नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।"
                      />
                    </div>
                  </div>
                </div>

                <div className="flexThreeChildDiv">
                  <div className="flexThreeChildTitleDiv">
                    <label className="flexThreeChildTitle">
                      शैक्षिक भिडियो
                    </label>
                    <span className="flexThreeChildViewAllButton">
                      सबै हेर्नुहोस्
                    </span>
                  </div>
                  <div className="flexThreeChildCardDiv">
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage2}
                        title="डिजाइन गर्ने रणनीतिहरू समावेश गर्दै।"
                      />
                    </div>
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage5}
                        title="विशेषज्ञहरू जसले सबै योगदान गर्नेछन्।त्यहाँ विचार गर्न समयरेखाहरू छन्, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको लागि उत्तम अभ्यासहरू।"
                      />
                    </div>
                    <div className="flexThreeChildCard">
                      <BottomComponent
                        image={downImage1}
                        title="जब यो एउटा यादगार रेस्टुरेन्ट अवधारणा निर्माण र डिजाइन गर्ने कुरा आउँछ, त्यहाँ धेरै छन्।"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contentFooter">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
