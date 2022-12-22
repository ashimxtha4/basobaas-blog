import React from "react";
import { Icon } from "@iconify/react";

const HomeBlogTypeMain = () => {
  return (
    <>
      <div className="homeBlogTypeMain" style={{ backgroundImage: "url('')" }}>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <p>{/* ENTER BLOG CATEGORY NAME HERE */}TRAVEL</p>
          </div>
          <div className="blogTitle">
            <p>
              {/* ENTER BLOG TITLE NAME HERE */}The most expensive area of Nepal
              with most expensive and the most lavish lifestyles one can have
            </p>
          </div>
          <div className="blogBy">
            <span className="author">
              {/* ENTER BLOG BY NAME HERE */}Rajan Adhikari
            </span>
            <span className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#FFFFFF"
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

export default HomeBlogTypeMain;
