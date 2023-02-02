import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { dateFormatter } from "../../utilities/helper";
import Skeleton from "./skeleton";

const MarketNewsTypeMain = (props: any) => {
  const marketData = useAppSelector(
    (state) => state.blogData.market_news.items
  );
  const loading = useAppSelector((state) => state.blogData.loading);
  const categoryList = useAppSelector((state) => state.categoryData.data.items);

  return (
    <>
      <div className="marketNewsTypeMain">
        {loading == "loading" ? (
          <Skeleton />
        ) : (
          <div className="imageContainer">
            <Image
              src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                marketData[0]?.id
              }/${marketData[0]?.images[0]}`}
              alt="Basobaas Nepal"
              height={627}
              width={268}
              // fill
              quality={60}
              className="image"
            />
          </div>
        )}

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
          {loading == "loading" ? (
          <Skeleton />
        ) : (<p>{marketData[0]?.title_np}</p>)}
            
          </div>
          <div className="blogBody">
            <p>{marketData[0]?.content}</p>
          </div>
          <div className="blogBy">
            <span className="author">राजन अधिकारी</span>
            <span
              className="separator"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#969696",
              }}
            ></span>
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
