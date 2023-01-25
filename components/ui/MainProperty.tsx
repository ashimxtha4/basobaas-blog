import { Icon } from "@iconify/react";
import Image from "next/image";

const MainProperty = (props: any) => {

  return (
    <>
      <div className="card">
        <div className="saleRentTag">
          <p>For {props.data.status}</p>
        </div>
        <div className="imageContainer">
          <img src={props?.data?.thumbnail?.replaceAll("basobaasapi.asterdio.xyz","basobaas.com/api") as any} alt={props.data?.thumbnail_alt} className="img" />
        </div>
        <div className="contentContainer">
          <div className="propertyPrice">
            <div className="priceDiv">
              <span className="price">NPR. {props.data?.price}</span>
              <span className="unit">/{props.data?.price_postfix}</span>
            </div>
          </div>
          <div className="propertyTitle">
            <p>{props.data?.title as string}</p>
          </div>
          <div className="propertyAddress">
            <p>
              <Icon
                icon="ph:map-pin-bold"
                color="#707580"
                width="18"
                height="18"
                inline={true}
                style={{ marginRight: "8px" }}
              />
              {props.data?.address as string}
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
              <div className="overViewText">
                <span className="overViewTags">{props.data?.bedroom_count}</span>
                <span className="overViewTags">Beds</span>
              </div>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="majesticons:bath-shower-line"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <div className="overViewText">
                <span className="overViewTags">{props.data?.bathroom_count}</span>
                <span className="overViewTags">Bath</span>
              </div>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="bxs:area"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <div className="overViewText">
                <span className="overViewTags">{props?.data?.area_covered}</span>
                <span className="overViewTags">{props?.data?.area_units}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProperty;
