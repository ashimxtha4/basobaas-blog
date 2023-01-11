import React, { useState, useEffect } from "react";
// import { getBlogByCategory } from "../../pages/index";
import { Icon } from "@iconify/react";
import Image from "next/image";
import LawAndPolicyImage from "../../public/Images/LawAndPolicyImage.svg";

const LawAndPolicy = (props:any)=>{
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
              <Image className="image" src={LawAndPolicyImage} alt="basobaas Nepal" />
            </div>
            <div className="blogContents">
              <div className="blogCategoryTitle">
                <p>
                  {/* ENTER BLOG CATEGORY TITLE HERE */}
                  {/* {blog?.category?.name} */}
                  यात्रा
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
                  {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता अघि
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
              <Image className="image" src={LawAndPolicyImage} alt="basobaas Nepal" />
            </div>
            <div className="blogContents">
              <div className="blogCategoryTitle">
                <p>
                  {/* ENTER BLOG CATEGORY TITLE HERE */}
                  {/* {blog?.category?.name} */}
                  यात्रा
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
                  {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता अघि
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
              <Image className="image" src={LawAndPolicyImage} alt="basobaas Nepal" />
            </div>
            <div className="blogContents">
              <div className="blogCategoryTitle">
                <p>
                  {/* ENTER BLOG CATEGORY TITLE HERE */}
                  {/* {blog?.category?.name} */}
                  यात्रा
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
                  {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता अघि
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
              <Image className="image" src={LawAndPolicyImage} alt="basobaas Nepal" />
            </div>
            <div className="blogContents">
              <div className="blogCategoryTitle">
                <p>
                  {/* ENTER BLOG CATEGORY TITLE HERE */}
                  {/* {blog?.category?.name} */}
                  यात्रा
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
                  {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता अघि
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
