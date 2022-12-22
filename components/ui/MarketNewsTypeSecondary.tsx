import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const MarketNewsTypeSecondary = () => {
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
              Title
            </p>
          </div>
          <div className="blogHeader">
            <p>
              {/* ENTER BLOG TITLE HERE */}
              The most expensive area of Nepal with most expensive house with
              The most lavish lifestyle money can buy
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
};

export default MarketNewsTypeSecondary;
