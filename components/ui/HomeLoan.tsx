import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { getBlogByCategory } from "../../pages";
import Image from "next/image";
import HomeLoanImage1 from "../../public/Images/homeLoanImage1.svg";
import HomeLoanImage2 from "../../public/Images/homeLoanImage2.svg";
import HomeLoanImage3 from "../../public/Images/homeLoanImage3.svg";

const HomeLoan = () =>
  // { id }: { id: string }
  {
    const [blog, setBlog] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   getBlogByCategory(id, 3)
    //     .then((data) => setBlog(data))
    //     .catch((err) => console.log("err", err))
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // }, [id]);

    // if (loading) {
    //   <h1>Loading...</h1>;
    // }

    // if (blog.length) {
    return (
      <>
        <div className="homeLoanTitleDiv">
          <label className="homeLoanTitle">होम लोन</label>
          <span className="homeLoanViewAllButton">सबै हेर्नुहोस्</span>
        </div>
        <div className="homeLoanCardDiv">
          {/* {blog?.map((blog, ix) => { */}
          {/* // return ( */}
          <div
            className="homeLoanCard"
            //  key={ix}
          >
            <div className="homeLoan">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="homeLoanImage"
                  src={HomeLoanImage1}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    राजन अधिकारी
                  </span>
                  <span className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#969696"
                    />
                  </span>
                  <span className="posted">
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}१ हप्ता
                    अघि
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="homeLoanCard"
            //  key={ix}
          >
            <div className="homeLoan">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="homeLoanImage"
                  src={HomeLoanImage2}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    अनधिकृत संरचना हटाउने तयारीमा उपत्यका विकास प्राधिकरण।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    आशिम श्रेष्ठ
                  </span>
                  <span className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#969696"
                    />
                  </span>
                  <span className="posted">
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ महिना
                    अघि
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="homeLoanCard"
            //  key={ix}
          >
            <div className="homeLoan">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="homeLoanImage"
                  src={HomeLoanImage3}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    अवैध रूपमा सञ्चालित २ सय भन्दा बढि क्रसर उद्योग बन्द।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    रुद्र कँडेल
                  </span>
                  <span className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#969696"
                    />
                  </span>
                  <span className="posted">
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}३ महिना
                    अघि
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* // );
          // })} */}
        </div>
      </>
    );
    // }
    // return <>
    //   <div className="homeLoanTitleDiv">
    //     <label className="homeLoanTitle">Home Loan</label>
    //     <span className="homeLoanViewAllButton">View All</span>
    //   </div>
    //   <div className="homeLoanCardDiv"></div>
    // </>;
  };

export default HomeLoan;
