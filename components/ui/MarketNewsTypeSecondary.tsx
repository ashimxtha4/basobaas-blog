import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const MarketNewsTypeSecondary = ({ blog = {} as any }) => {
  if (Object.keys(blog).length > 0)
  return (
    <>
      <div className="marketNewsTypeSecondary">
        <div className="imageContainer">
          <Image
            src=""
            alt="Picture of the author"
            width={260}
            height={133.33}
          />
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>
              {/* ENTER BLOG CATEGORY TITLE HERE */}
              {blog.category?.title}
            </p>
          </div>
          <div className="blogHeader">
            <p>
              {/* ENTER BLOG TITLE HERE */}
              {blog.title}
            </p>
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

export default MarketNewsTypeSecondary;
