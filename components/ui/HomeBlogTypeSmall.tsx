import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";
import HomeBlogMainImage from "../../public/Images/blogDetailsImage1.svg";
import Image from "next/image";

const HomeBlogTypeSmall = (props:any) =>
  // { blog = {} }: any
  {
    // const blogPostedDate = blog.createdAt;
    // if (Object.keys(blog).length > 0)
    return (
      <>
        <div
          className="homeBlogTypeSmall"
          // style={{ backgroundImage: `url(${blog.images[0]})` }}
        >
          <div className="thumbnail">
            {/* <img
              src={imageUrlCheck(blog.images[0] as string)}
              className="blogCardBackground"
              alt="Basobaas Nepal"
            /> */}
            <Image
              className="blogCardBackground"
              src={props.data?.thumbnail}
              alt="Basobaas Nepal"
            />
          </div>
          <div className="cardContent">
            <div className="blogCategoryTag">
              <p>
                {/* {blog.category?.name} */}
                {props.data?.categoryTag}
              </p>
            </div>
            <div className="blogTitle">
              <p>
                {/* {blog.title} */}
                {props.data?.title}
                {/* सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र। */}
              </p>
            </div>
            <div className="blogBy">
              <div className="author">
                {/* {blog.author?.fullName} */}
                राजन अधिकारी
              </div>
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
                {/* {blogPostedDate} */}२ हप्ता अघि
              </div>
            </div>
          </div>
        </div>
      </>
    );
    // else return null;
  };

export default HomeBlogTypeSmall;
