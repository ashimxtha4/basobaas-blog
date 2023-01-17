import { Icon } from "@iconify/react";
import Image from "next/image";
import LifeStyleImages from "../../public/Images/LifestyleImages.svg";
import blogDetailsImage1 from "../../public/Images/blogDetailsImage1.svg";
import LawAndPolicyImage from "../../public/Images/LawAndPolicyImage.svg";
import RelatedBlogImage1 from "../../public/Images/relatedBlogsImage1.svg";
import RelatedBlogImage2 from "../../public/Images/relatedBlogsImage2.svg";
import RelatedBlogImage3 from "../../public/Images/relatedBlogsImage3.svg";

const LifeStyle = () => {
  const dummyRelatedBlogsData: any = [
    {
      thumbnail: RelatedBlogImage1,
      categoryTag: "यात्रा",
      title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
    },
    {
      thumbnail: RelatedBlogImage2,
      categoryTag: "यात्रा",
      title: "नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।",
    },
    {
      thumbnail: RelatedBlogImage3,
      categoryTag: "यात्रा",
      title:
        "रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र रेस्टुरेन्टहरूको।",
    },
    {
      thumbnail: RelatedBlogImage3,
      categoryTag: "यात्रा",
      title:
        "नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र,  ७३ प्रतिशत भौतिक प्रगति।",
    },
  ];

  return (
    <>
      <div className="lifeStyleTitleDiv">
        <label className="lifeStyleTitle">जीवनशैली</label>
        <span className="lifeStyleViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="lifeStyleCardDiv">
        <>
          <div className="lifeStyleCard">
            <div className="lifestyle">
              <div className="thumbnail">
                <Image
                  className="image"
                  src={blogDetailsImage1}
                  alt="basobaas nepal"
                />
              </div>
              <div className="cardContent">
                <div className="blogCategoryTag">
                  <p>{dummyRelatedBlogsData[0].categoryTag}</p>
                </div>
                <div className="blogTitle">
                  <p>{dummyRelatedBlogsData[2].title}</p>
                </div>
                <div className="blogBy">
                  <div className="author">राजन अधिकारी</div>
                  <div className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#FFFFFF"
                    />
                  </div>
                  <div className="posted">२ हप्ता अघि</div>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="lifeStyleCard">
            <div className="lifestyle">
              <div className="thumbnail">
                <Image
                  className="image"
                  src={LawAndPolicyImage}
                  alt="basobaas nepal"
                />
              </div>
              <div className="cardContent">
                <div className="blogCategoryTag">
                  <p>{dummyRelatedBlogsData[1].categoryTag}</p>
                </div>
                <div className="blogTitle">
                  <p>{dummyRelatedBlogsData[1].title}</p>
                </div>
                <div className="blogBy">
                  <div className="author">राजन अधिकारी</div>
                  <div className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#FFFFFF"
                    />
                  </div>
                  <div className="posted">२ हप्ता अघि</div>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="lifeStyleCard">
            <div className="lifestyle">
              <div className="thumbnail">
                <Image
                  className="image"
                  src={LifeStyleImages}
                  alt="basobaas nepal"
                />
              </div>
              <div className="cardContent">
                <div className="blogCategoryTag">
                  <p>{dummyRelatedBlogsData[2].categoryTag}</p>
                </div>
                <div className="blogTitle">
                  <p>{dummyRelatedBlogsData[3].title}</p>
                </div>
                <div className="blogBy">
                  <div className="author">राजन अधिकारी</div>
                  <div className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#FFFFFF"
                    />
                  </div>
                  <div className="posted">२ हप्ता अघि</div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default LifeStyle;
