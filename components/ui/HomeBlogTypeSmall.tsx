import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";

const HomeBlogTypeSmall = ({ blog = {} }: any) => {
  const blogPostedDate = blog.createdAt;
  if (Object.keys(blog).length > 0)
    return (
      <>
        <div
          className="homeBlogTypeSmall"
          // style={{ backgroundImage: `url(${blog.images[0]})` }}
        >
          <div className="thumbnail">
            <img
              src={imageUrlCheck(blog.images[0] as string)}
              className="blogCardBackground"
              alt="Basobaas Nepal"
            />
          </div>
          <div className="cardContent">
            <div className="blogCategoryTag">
              <p>{blog.category?.name}</p>
            </div>
            <div className="blogTitle">
              <p>{blog.title}</p>
            </div>
            <div className="blogBy">
              <div className="author">{blog.author?.fullName}</div>
              <div className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#FFFFFF"
                />
              </div>
              <div className="posted">
                {/* {createdAt} */}
                {/* {blogPostedDate} */}
                hi
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else return null;
};

export default HomeBlogTypeSmall;
