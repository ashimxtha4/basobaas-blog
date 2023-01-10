import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { getBlogByCategory } from "../../pages";
import OurThoughtsImage from "../../public/Images/MarketNewsImage.svg";
import Image from "next/image";

const OurThoughts = () =>
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
        <div className="ourThoughtsTitleDiv">
          <label className="ourThoughtsTitle">Our Thoughts</label>
          <span className="ourThoughtsViewAllButton">View All</span>
        </div>
        <div className="ourThoughtsCardDiv">
          {/* {blog?.map((blog, ix) => { */}
          {/* return ( */}
          <div
            className="ourThoughtsCard"
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
                <Image src={OurThoughtsImage} alt="basobaas Nepal" />
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
            className="ourThoughtsCard"
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
                <Image src={OurThoughtsImage} alt="basobaas Nepal" />
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
            className="ourThoughtsCard"
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
                <Image src={OurThoughtsImage} alt="basobaas Nepal" />
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
          {/* );
          // })} */}
        </div>
      </>
    );
    // }
    //   return <>
    //   <div className="ourThoughtsTitleDiv">
    //     <label className="ourThoughtsTitle">Our Thoughts</label>
    //     <span className="ourThoughtsViewAllButton">View All</span>
    //   </div>
    //   <div className="ourThoughtsCardDiv"></div>
    // </>;;
  };

export default OurThoughts;
