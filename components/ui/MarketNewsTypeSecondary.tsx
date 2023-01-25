import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useAppSelector } from "../../state";
import moment from "moment";
import { dateFormatter } from "../../utilities/helper";

const MarketNewsTypeSecondary = ({ data }: { data: any }) => {
  const categoryList = useAppSelector((state) => state.categoryData.data.items);

  return (
    <>
      <div className="marketNewsTypeSecondary">
        <div className="imageContainer">
          <Image
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${data.id}/${
              data.images[0]
            }`}
            fill
            alt="Basobaas Nepal"
            className="image"
          />
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>
              {
                categoryList?.find((obj: any) => obj.id == data.category)
                  ?.name_np
              }
            </p>
          </div>
          <div className="blogHeader">
            <p>{data?.title_np}</p>
          </div>
          <div className="blogBy">
            <span className="author">राजन अधिकारी</span>
            <span className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#969696"
              />
            </span>
            <span className="posted">
              {dateFormatter(moment(`${data?.created}`).fromNow())}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketNewsTypeSecondary;
