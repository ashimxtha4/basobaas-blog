import React, { useState, useEffect } from "react";
// import { getBlogByCategory } from "../../pages/index";
import { Icon } from "@iconify/react";
import Image from "next/image";
import LawAndPolicyImage1 from "../../public/Images/LawAndPolicyImage.svg";
import LawAndPolicyImage2 from "../../public/Images/lawAndPolicyImage2.svg";
import LawAndPolicyImage3 from "../../public/Images/lawAndPolicyImage3.svg";
import LawAndPolicyImage4 from "../../public/Images/lawAndPolicyImage4.svg";

const LawAndPolicy = (props: any) => {
  const [blog, setBlog] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getBlogByCategory(id, 4)
  //     .then((data) => setBlog(data))
  //     .catch((err) => console.log("err", err))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) {
  //   <h1>Loading...</h1>;
  // }

  // if (blog.length) {
  return (
    <>
      <div className="lawPolicyTitleDiv">
        <label className="lawPolicyTitle">{props.title}</label>
        <span className="lawPolicyViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="lawPolicyCardDiv">
        {/* {blog.map((blog, index) => {
            return ( */}
        {/* <div className="lawPolicyCard" key={index}> */}
        <div className="lawPolicyCard">
          <div className="imageContainer">
            {/* <Image className="image"
            src=""
            alt="Picture of the author"
            width={260}
            height={133.33}
          /> */}
            <Image
              className="image"
              src={LawAndPolicyImage1}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog?.category?.name} */}
                कानुन र नीति
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog?.title} */}
                नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र, ७३ प्रतिशत भौतिक
                प्रगति।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog?.author?.fullName} */}
                राजन अधिकारी
              </span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ मिनेट अघि
              </span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            {/* <Image className="image"
            src=""
            alt="Picture of the author"
            width={260}
            height={133.33}
          /> */}
            <Image
              className="image"
              src={LawAndPolicyImage2}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog?.category?.name} */}
                कानुन र नीति
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog?.title} */}
                पद्मा कोलोनीः उत्कृष्ट डिजाइनका घरमा आकर्षक फर्निचरको प्रयोग ।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog?.author?.fullName} */}
                कपिल कार्की
              </span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}५ दिन अघि
              </span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            {/* <Image className="image"
            src=""
            alt="Picture of the author"
            width={260}
            height={133.33}
          /> */}
            <Image
              className="image"
              src={LawAndPolicyImage3}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog?.category?.name} */}
                कानुन र नीति
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog?.title} */}
                तुलसी विवाह किन र कसरी गर्ने ! यस्ता छन् जान्नैपर्ने कुराहरू।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog?.author?.fullName} */}
                कमल पण्डित
              </span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}१ हप्ता अघि
              </span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            {/* <Image className="image"
            src=""
            alt="Picture of the author"
            width={260}
            height={133.33}
          /> */}
            <Image
              className="image"
              src={LawAndPolicyImage4}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog?.category?.name} */}
                कानुन र नीति
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog?.title} */}
                सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog?.author?.fullName} */}
                राजन अधिकारी
              </span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}१० महिना अघि
              </span>
            </div>
          </div>
        </div>

        {/* ); */}
        {/* // })} */}
      </div>
    </>
  );
  // }

  // return null;
};

export default LawAndPolicy;
