import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect } from "react";
import HomeBlogMainImage from "../../public/Images/MarketNewsImage.svg";
import { useAppDispatch, useAppSelector } from "../../state";
import { fetchBlogs } from "../../state/actions/actions";

const MarketNewsTypeMain = (props:any) => {
  const dispatch = useAppDispatch();
  
  const marketData=useAppSelector((state)=>state.blogData.market_news.items);
  const categoryList = useAppSelector((state)=>state.categoryData.data.items);
  useEffect(() => {
    dispatch(
      fetchBlogs({
        page: 1,
        perPage: 4,
        category: "market_news",
      })
    );
  },[dispatch]);
  return (
    <>
      <div className="marketNewsTypeMain">
        <div className="imageContainer">
          <Image
            src={HomeBlogMainImage}
            alt="Basobaas Nepal"
            className="image"
            height={300}
          />
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>
              {categoryList?.find((obj:any)=>obj?.id==marketData[0]?.category)?.name_np}
            </p>
          </div>
          <div className="blogHeader">
            <p>{(marketData!=undefined)&&marketData[0]?.title_np}</p>
          </div>
          <div className="blogBody">
            <p>
              {(marketData!=undefined)&&marketData[0]?.content}
            </p>
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
            <span className="posted">२ हप्ता अघि</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketNewsTypeMain;
