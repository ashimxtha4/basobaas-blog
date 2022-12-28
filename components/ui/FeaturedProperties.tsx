import React from "react";
import { Icon } from "@iconify/react";

const FeaturedProperties = () => {
  return (
    <>
      <div className="featuredProperties">
        <div className="imageContainer">
          <img src="" />
        </div>
        <div className="contentContainer">
          <div className="propertyTitle">
            <p>Title</p>
          </div>
          <div className="propertyAddress">
            <p>Karyabinayak, Lalitpur</p>
          </div>
          <div className="propertyOverview">
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="icon-park-solid:single-bed"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">2</span>
              <span className="overViewTags">Beds</span>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="majesticons:bath-shower-line"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">1</span>
              <span className="overViewTags">Bath</span>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="bxs:area"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">1200</span>
              <span className="overViewTags">sq.ft</span>
            </div>
          </div>
          <div className="propertyPrice">
            <span className="price">NPR.</span>
            <span className="unit">/ Onwards</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
