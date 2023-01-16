import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";
import HomeBlogMainImage from "../../public/Images/blogDetailsImage1.svg";
import Image from "next/image";

const HomeBlogTypeSmall = (props: any) => {
  return (
    <>
      <div className="homeBlogTypeSmall">
        <div className="thumbnail">
          <Image
            className="blogCardBackground"
            src={props.data?.thumbnail}
            alt="Basobaas Nepal"
          />
        </div>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <p>{props.data?.categoryTag}</p>
          </div>
          <div className="blogTitle">
            <p>{props.data?.title}</p>
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
