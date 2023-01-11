import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
// import { getBlogByCategory } from "../../pages";
import Image from "next/image";
import OurThoughtsImage1 from "../../public/Images/homeLoanImage2.svg";
import OurThoughtsImage2 from "../../public/Images/homeLoanImage3.svg";
import OurThoughtsImage3 from "../../public/Images/homeLoanImage1.svg";

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
          <label className="ourThoughtsTitle">हाम्रा विचारहरू</label>
          <span className="ourThoughtsViewAllButton">सबै हेर्नुहोस्</span>
        </div>
        <div className="ourThoughtsCardDiv">
          {/* {blog?.map((blog, ix) => { */}
          {/* return ( */}
          <div
            className="ourThoughtsCard"
            //  key={ix}
          >
            <div className="ourThoughts">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="ourThoughtsImage"
                  src={OurThoughtsImage1}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र, ७३ प्रतिशत भौतिक
                    प्रगति।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    राजन मगर
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}११ घण्टा
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
            <div className="ourThoughts">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="ourThoughtsImage"
                  src={OurThoughtsImage2}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    पद्मा कोलोनीः उत्कृष्ट डिजाइनका घरमा आकर्षक फर्निचरको प्रयोग
                    ।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    कपिल कार्की
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}४ दिन अघि
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ourThoughtsCard"
            //  key={ix}
          >
            <div className="ourThoughts">
              <div className="imageContainer">
                {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                <Image
                  className="ourThoughtsImage"
                  src={OurThoughtsImage3}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    {/* ENTER BLOG TITLE HERE */}
                    {/* {blog.title} */}
                    तुलसी विवाह किन र कसरी गर्ने ! यस्ता छन् जान्नैपर्ने
                    कुराहरू।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">
                    {/* ENTER BLOG BY NAME HERE */}
                    {/* {blog.author?.fullName} */}
                    कमल पण्डित
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
                    {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}७ 
महिना
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
