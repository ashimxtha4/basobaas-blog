import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { getBlogByCategory } from "../../pages";
import HomeLoanImage from "../../public/Images/homeLoanImage2.svg";
import Image from "next/image";

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
          <label className="homeLoanTitle">Home Loan</label>
          <span className="homeLoanViewAllButton">View All</span>
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
                  src={HomeLoanImage}
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता
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
                  src={HomeLoanImage}
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता
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
                  src={HomeLoanImage}
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}२ हप्ता
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
