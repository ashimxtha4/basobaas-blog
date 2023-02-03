import { Icon } from "@iconify/react";
import Image from "next/image";
import { check, priceFormatter } from "../../utilities/helper";

const FeaturedProperties = ({ property }: { property: any }) => {
  return (
    <>
      <div className="featuredProperties">
        <div className="imageContainer">
          <Image
            className="image"
            src={
              property?.thumbnail?.replaceAll(
                "basobaasapi.asterdio.xyz",
                "basobaas.com/api"
              ) as any
            }
            alt={property?.thumbnail_alt}
            width={120}
            height={105}
          />
        </div>
        <div className="contentContainer">
          <div className="propertyTitle">
            <p>{property?.title}</p>
          </div>
          <div className="propertyAddress">
            <p>{property?.address}</p>
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
                <span className="overViewTags">{property?.bedroom_count}</span>
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
                <span className="overViewTags">{property?.bathroom_count}</span>
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
                <span className="overViewTags">{property?.sqft}</span>
                <span className="overViewTags">sq.ft</span>
              </div>
            </div>
          </div>
          <div className="propertyPrice">
            <span className="price">
              {priceFormatter(property?.price)}
              {property?.price_postfix && " /"}
            </span>
            <span className="unit">{check(property?.price_postfix)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
