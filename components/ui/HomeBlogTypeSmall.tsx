import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";
import HomeBlogMainImage from "../../public/Images/blogDetailsImage1.svg";
import Image from "next/image";
import { useAppSelector } from "../../state";

const HomeBlogTypeSmall = ({data}:{data:any}) => {
  const categoryList = useAppSelector((state)=>state.categoryData.data.items);

  return (
    <>
      <div className="homeBlogTypeSmall">
        <div className="thumbnail">
          <Image
            className="blogCardBackground"
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
              data.id
            }/${data.images[0]}`}
            fill
            alt="Basobaas Nepal" 
          />
        </div>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <p>{categoryList?.find((obj:any)=>obj.id==data.category)?.name_np}</p>
          </div>
          <div className="blogTitle">
            <p>{data?.title_np}</p>
          </div>
          <div className="blogBy">
            <div className="author">राजन अधिकारी</div>
            <div className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#FFFFFF"
              />
            </div>
            <div className="posted">२ हप्ता अघि</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogTypeSmall;
