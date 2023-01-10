import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import HomeBlogMainImage from "../../public/Images/MarketNewsImage.svg";

const MarketNewsTypeMain = () =>
  // { blog = {} }: any
  {
    // if (Object.keys(blog).length > 0)
    return (
      <>
        <div className="marketNewsTypeMain">
          <div className="imageContainer">
            {/* {blog.images?.length ? (
              <Image
                src={imageUrlCheck(blog?.images[0])}
                alt="Blog Picture"
                width={345}
                height={180}
              />
              
            ) : null} */}
            <Image src={HomeBlogMainImage} alt="Basobaas Nepal" />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog.category?.name} */}
                निर्माण
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog.title} */}
                सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।
              </p>
            </div>
            <div className="blogBody">
              {/* <p dangerouslySetInnerHTML={blog.content}></p> */}
              <p>
                घर भनेको एकल-इकाई आवासीय भवन हो। यो प्रारम्भिक झुपडीबाट काठ,
                चिनाई, कंक्रीट वा अन्य सामग्रीको जटिल संरचना सम्मको जटिलतामा हुन
                सक्छ, आउटफिट गरिएको बुद्धि...
              </p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog.author?.fullName} */}
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
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}2 weeks ago
              </span>
            </div>
          </div>
        </div>
      </>
    );
    // else return null;
  };

export default MarketNewsTypeMain;
