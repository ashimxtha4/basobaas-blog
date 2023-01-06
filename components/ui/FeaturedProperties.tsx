import React from "react";
import { Icon } from "@iconify/react";
import { Priceformatter } from "../../utilities/helper";
import { IMG_URL } from "../../baseConstants";
import Image from "next/image";
import FeaturedPropertyImage from "../../public/Images/Featured Properties1.svg";

const FeaturedProperties = () =>
  //   {
  //   property,
  // }: {
  //   property: {
  //     propertyImages: string[];
  //     pricing: {
  //       title: string;
  //       label: string;
  //       price: string | number;
  //     };
  //     location: {
  //       streetName: string;
  //       locality: string;
  //     };
  //     overview: {
  //       bathRoom: string | number;
  //       bedRoom: string | number;
  //     };
  //   };
  // }
  {
    return (
      <>
        <div className="featuredProperties">
          <div className="imageContainer">
            {/* <img
              className="image"
              src={`${IMG_URL as string}` + `${property.propertyImages[0]}`}
            /> */}
            <Image
              className="image"
              src={FeaturedPropertyImage}
              alt="Featured Properties"
            />
          </div>
          <div className="contentContainer">
            <div className="propertyTitle">
              <p>
                {/* {property.pricing.title} */}
                Karyabinayak Homes
              </p>
            </div>
            <div className="propertyAddress">
              <p>
                {/* {property.location?.streetName}, {property.location?.locality} */}
                Karyabinayak, Lalitpur
              </p>
            </div>
            <div className="propertyOverview">
              <div className="overviewDatas">
                <div className="iconContainer">
                  <Icon
                    icon="icon-park-solid:single-bed"
                    color="#707580"
                    className="overviewIcons"
                  />
                </div>
                <div className="overViewInformation">
                  <span className="overViewTags">
                    {/* {property.overview?.bedRoom} */}2
                  </span>
                  <span className="overViewTags">Beds</span>
                </div>
              </div>
              <div className="overviewDatas">
                <div className="iconContainer">
                  <Icon
                    icon="majesticons:bath-shower-line"
                    color="#707580"
                    className="overviewIcons"
                  />
                </div>
                <div className="overViewInformation">
                  <span className="overViewTags">
                    {/* {property.overview?.bathRoom} */}1
                  </span>
                  <span className="overViewTags">Bath</span>
                </div>
              </div>
              <div className="overviewDatas">
                <div className="iconContainer">
                  <Icon
                    icon="bxs:area"
                    color="#707580"
                    className="overviewIcons"
                  />
                </div>
                <div className="overViewInformation">
                  <span className="overViewTags">1200</span>
                  <span className="overViewTags">sq.ft</span>
                </div>
              </div>
            </div>
            <div className="propertyPrice">
              <span className="price">
                {/* NPR. {Priceformatter(property.pricing?.price)} */}
                3.35 Lakh
              </span>
              <span className="unit">
                {/* / {property.pricing?.label} */}/ Onwards
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

export default FeaturedProperties;
