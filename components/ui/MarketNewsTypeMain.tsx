import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";
import { NodeFlags } from "typescript";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

const MarketNewsTypeMain = ({ blog = {} }: any) => {
  console.log(blog);

  if (Object.keys(blog).length > 0)
    return (
      <>
        <div className="marketNewsTypeMain">
          <div className="imageContainer">
            {blog.images?.length ? (
              <Image
                src={imageUrlCheck(blog?.images[0])}
                alt="Blog Picture"
                width={345}
                height={180}
              />
            ) : null}
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>
                {/* ENTER BLOG CATEGORY TITLE HERE */}
                {blog.category?.name}
              </p>
            </div>
            <div className="blogHeader">
              <p>
                {/* ENTER BLOG TITLE HERE */}
                {blog.title}
              </p>
            </div>
            <div className="blogBody">
              <p>{blog.content}</p>
            </div>
            <div className="blogBy">
              <span className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {blog.author?.fullName}
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
  else return null;
};

export default MarketNewsTypeMain;
