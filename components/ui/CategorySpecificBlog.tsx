import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";

const CategorySpecificBlog = (
    // { blog = {} }: any
    ) => {
//   if (Object.keys(blog).length > 0)
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
            image here
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {/* {blog.category?.name} */}
                category name
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {/* {blog.title} */}
                blog title
              </p>
            </div>
            <div className="blogBody">
              {/* <p>{blog.content}</p> */}
              balksjdlkajdlk laksjdlkad alkjdlkasjdkla akljdklad
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {/* {blog.author?.fullName} */}
                aklsjd
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
//   else return null;
};

export default CategorySpecificBlog;
