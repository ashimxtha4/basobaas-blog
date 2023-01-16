import { Icon } from "@iconify/react";
import Image from "next/image";

const MainProperty = (props: any) => {
  return (
    <>
      <div className="card">
        <div className="saleRentTag">
          <p>For Sale</p>
        </div>
        <div className="imageContainer">
          <Image src={props.data?.photo as any} alt="noImage" className="img" />
        </div>
        <div className="contentContainer">
          <div className="propertyPrice">
            <div className="priceDiv">
              <span className="price">NPR. {props.data?.price}</span>
              <span className="unit">/{props.data?.priceLabel}</span>
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
                <span className="overViewTags">{props.data?.beds}</span>
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
                <span className="overViewTags">{props.data?.bath}</span>
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
                <span className="overViewTags">{props.data?.sqft}</span>
                <span className="overViewTags">sq.ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProperty;
