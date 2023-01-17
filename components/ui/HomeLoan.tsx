import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { getBlogByCategory } from "../../pages";
import Image from "next/image";
import HomeLoanImage1 from "../../public/Images/homeLoanImage1.svg";
import HomeLoanImage2 from "../../public/Images/homeLoanImage2.svg";
import HomeLoanImage3 from "../../public/Images/homeLoanImage3.svg";

const HomeLoan = () => {
  return (
    <>
      <div className="homeLoanTitleDiv">
        <label className="homeLoanTitle">होम लोन</label>
        <span className="homeLoanViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="homeLoanCardDiv">
        <div className="homeLoanCard">
          <div className="homeLoan">
            <div className="imageContainer">
              <Image
                className="homeLoanImage"
                src={HomeLoanImage1}
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogHeader">
                <p>सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।</p>
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
                <span className="posted">अघि</span>
              </div>
            </div>
          </div>
        </div>
        <div className="homeLoanCard">
          <div className="homeLoan">
            <div className="imageContainer">
              <Image
                className="homeLoanImage"
                src={HomeLoanImage2}
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogHeader">
                <p>अनधिकृत संरचना हटाउने तयारीमा उपत्यका विकास प्राधिकरण।</p>
              </div>
              <div className="blogBy">
                <span className="author">आशिम श्रेष्ठ</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">अघि</span>
              </div>
            </div>
          </div>
        </div>
        <div className="homeLoanCard">
          <div className="homeLoan">
            <div className="imageContainer">
              <Image
                className="homeLoanImage"
                src={HomeLoanImage3}
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogHeader">
                <p>अवैध रूपमा सञ्चालित २ सय भन्दा बढि क्रसर उद्योग बन्द।</p>
              </div>
              <div className="blogBy">
                <span className="author">रुद्र कँडेल</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">अघि</span>
              </div>
            </div>
          </div>
        </div>
        {/* // );
          // })} */}
      </div>
    </>
  );
};

export default HomeLoan;
