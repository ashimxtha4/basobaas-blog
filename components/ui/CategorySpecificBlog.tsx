import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";

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
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>{blog.subCategory?.name}</p>
          </div>
          <div className="blogHeader">
            <p>{blog.title}</p>
          </div>
          <div className="blogBody">
            <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
          </div>
          <div className="blogBy">
            <span className="author">{blog.author?.fullName}</span>
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
  //   else return null;
};

export default CategorySpecificBlog;
