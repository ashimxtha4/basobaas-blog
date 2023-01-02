import React from "react";
import { Icon } from "@iconify/react";
import { Priceformatter } from "../../utilities/helper";
import { IMG_URL } from "../../baseConstants";

const FeaturedProperties = ({
  property,
}: {
  property: {
    propertyImages: string[];
    pricing: {
      title: string;
      label: string;
      price: string | number;
    };
    location: {
      streetName: string;
      locality: string;
    };
    overview: {
      bathRoom: string | number;
      bedRoom: string | number;
    };
  };
}) => {
  return (
    <>
      <div className="featuredProperties">
        <div className="imageContainer">
          <img className="image" src={IMG_URL + property.propertyImages[0]} />
        </div>
        <div className="contentContainer">
          <div className="propertyTitle">
            <p>{property.pricing.title}</p>
          </div>
          <div className="propertyAddress">
            <p>
              {property.location?.streetName}, {property.location?.locality}
            </p>
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
              <span className="overViewTags">{property.overview?.bedRoom}</span>
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
              <span className="overViewTags">
                {property.overview?.bathRoom}
              </span>
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
            <span className="price">
              NPR. {Priceformatter(property.pricing?.price)}
            </span>
            <span className="unit">/ {property.pricing?.label}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
