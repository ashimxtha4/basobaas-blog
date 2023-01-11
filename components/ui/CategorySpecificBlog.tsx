import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";
import MarketNews from "../../public/Images/Market News.svg";
import { NodeFlags } from "typescript";

// const CategorySpecificBlog = ({ blog }: { blog: any }) => {
const CategorySpecificBlog = ({ blog }: { blog: any }) => {
  return (
    <>
      <div className="categorySpecificBlog">
        <div className="imageContainer">
          {/* {blog.images?.length ? (
              <Image
                src={imageUrlCheck(blog?.images[0])}
                alt="Blog Picture"
                width={345}
                height={172}
              />
            ) : null} */}
          <Image
            //  src={MarketNews}
            src={blog.thumbnail}
            alt="Blog Picture"
            width={345}
            height={172}
          />
        </div>
        <div className="blogContents">
          <div className="blogHeaderSectionContainer">
            <div className="blogCategoryTitle">
              <p>
                {/* {blog.subCategory?.name} */}
                {/* कानून र नीति */}
                {blog.categoryTag}
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* {blog.title} */}
                {/* सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र। */}
                {blog.title}
              </p>
            </div>
          </div>
          <div className="blogBody">
            {/* <p dangerouslySetInnerHTML={{ __html: blog.content }}></p> */}
            <p>
              {/* रेस्टुरेन्ट निर्माणमा धेरै कुराहरू छन् - आकर्षक लगानीकर्ताहरूदेखि
              लिएर रेस्टुरेन्ट ठेकेदारहरू खोज्ने र काममा राख्नेसम्म- र
              रेस्टुरेन्टहरूको दिमाग एकै पटक एक लाख ठाउँमा हुने अपेक्षा गरिन्छ।
              जब यो एउटा यादगार रेस्टुरेन्ट अवधारणा निर्माण र डिजाइन गर्ने कुरा
              आउँछ, त्यहाँ धेरै छन्। विभिन्न रेस्टुरेन्ट डिजाइनरहरू, ठेकेदारहरू,
              सल्लाहकारहरू, र विशेषज्ञहरू जसले सबै योगदान गर्नेछन्। त्यहाँ विचार
              गर्न समयरेखाहरू छन्, धेरै सरोकारवालाहरू, र रेस्टुरेन्ट निर्माणको
              लागि उत्तम अभ्यासहरू। हामी रेस्टुरेन्ट निर्माण गर्नका लागि मुख्य
              विचारहरू मार्फत हिंड्नेछौं, तपाईंको भविष्यका संरक्षकहरूका लागि
              सुन्दर, समावेशी ठाउँ निर्माण र डिजाइन गर्ने रणनीतिहरू समावेश
              गर्दै। विचार गर्नको लागि समयरेखाहरू, धेरै सरोकारवालाहरू, र
              रेस्टुरेन्ट निर्माणका लागि उत्कृष्ट अभ्यासहरू छन्। हामी एउटा
              सुन्दर, समावेशी निर्माण र डिजाइन गर्ने रणनीतिहरू समावेश गर्दै
              रेस्टुरेन्ट निर्माण गर्ने मुख्य विचारहरू मार्फत हिंड्नेछौं। */}
              {blog.content}
            </p>
          </div>
          <div className="blogBy">
            <span className="author">
              {/* {blog.author?.fullName} */}
              {/* राजन अधिकारी */}
              {blog.author}
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
              {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}
              {/* २ हप्ता अघि */}
              {blog.postedOn}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySpecificBlog;
