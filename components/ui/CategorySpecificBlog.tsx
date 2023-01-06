import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";
import MarketNews from "../../public/Images/Market News.svg";

// const CategorySpecificBlog = ({ blog }: { blog: any }) => {
const CategorySpecificBlog = () => {
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
          <Image src={MarketNews} alt="Blog Picture" width={345} height={172} />
        </div>
        <div className="blogContents">
          <div className="blogHeaderSectionContainer">
            <div className="blogCategoryTitle">
              <p>
                {/* {blog.subCategory?.name} */}
                Travel
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* {blog.title} */}
                The most expensive area of Nepal with most expensive house
              </p>
            </div>
          </div>
          <div className="blogBody">
            {/* <p dangerouslySetInnerHTML={{ __html: blog.content }}></p> */}
            <p>
              A house is a single-unit residential building. It may range in
              complexity from a rudimentary hut to a complex structure of wood,
              masonry, concrete or other material, outfitted wit...
            </p>
          </div>
          <div className="blogBy">
            <span className="author">
              {/* {blog.author?.fullName} */}
              Rajan Adhikari
            </span>
            <span className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#4F4F4F"
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
};

export default CategorySpecificBlog;
