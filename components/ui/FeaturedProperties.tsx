import { Icon } from "@iconify/react";
import Image from "next/image";
import { priceFormatter } from "../../utilities/helper";

const FeaturedProperties = ({ property }: { property: any }) => {
  function check(word:string){
    if(word?.length>0&&word[0]=="/")
      return word.slice(1)
    else 
      return word
  }
  return (
    <>
      <div className="featuredProperties">
        <div className="imageContainer">
          <Image
            className="image"
            fill
            src={
              property?.thumbnail?.replaceAll(
                "basobaasapi.asterdio.xyz",
                "basobaas.com/api"
              ) as any
            }
            alt={property?.thumbnail_alt}
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
            <span className="price">{priceFormatter(property?.price)}{property?.price_postfix&&" /"}</span>
            <span className="unit">{check(property?.price_postfix)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
