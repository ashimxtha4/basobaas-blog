import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { dateFormatter } from "../../utilities/helper";

const MarketNewsTypeMain = (props: any) => {
  const marketData = useAppSelector(
    (state) => state.blogData.market_news.items
  );
  const categoryList = useAppSelector((state) => state.categoryData.data.items);

  return (
    <>
      <div className="marketNewsTypeMain">
        <div className="imageContainer">
          <Image
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
              marketData[0]?.id
            }/${marketData[0]?.images[0]}`}
            alt="Basobaas Nepal"
            fill
            className="image"
          />
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>
              {
                categoryList?.find(
                  (obj: any) => obj?.id == marketData[0]?.category
                )?.name_np
              }
            </p>
          </div>
          <div className="blogHeader">
            <p>{marketData[0]?.title_np}</p>
          </div>
          <div className="blogBody">
            <p>{marketData[0]?.content}</p>
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
              {dateFormatter(moment(`${marketData[0]?.created}`).fromNow())}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketNewsTypeMain;
