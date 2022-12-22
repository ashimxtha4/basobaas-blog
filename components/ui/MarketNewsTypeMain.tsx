import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const MarketNewsTypeMain = () => {
  return (
    <>
      <div className="marketNewsTypeMain">
        <div className="imageContainer">
          <Image src="" alt="Blog Picture" width={345} height={180} />
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
          <div className="blogBody">
            <p>
              A house is a single-unit residential building. It may range in
              complexity from a rudimentary hut to a complex structure of wood,
              masonry, concrete or other material, outfitted wit asdalkdlaskjdlk
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

export default MarketNewsTypeMain;
