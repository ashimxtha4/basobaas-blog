import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { getBlogByCategory } from "../../pages";

const HomeLoan = ({ id }: { id: string }) => {
  const [blog, setBlog] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogByCategory(id, 3)
      .then((data) => setBlog(data))
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    <h1>Loading...</h1>;
  }

  if (blog.length) {
    return (
      <>
        <div className="homeLoanTitleDiv">
          <label className="homeLoanTitle">Home Load</label>
          <span className="homeLoanViewAllButton">View All</span>
        </div>
        <div className="homeLoanCardDiv">

          {blog?.map((blog, ix) => {
            return (
              <div className="homeLoanCard" key={ix}>
                <div className="homeLoan">
                  <div className="imageContainer">
                    {/* <Image
              src=""
              alt="Picture of the author"
              width={260}
              height={133.33}
            /> */}
                  </div>
                  <div className="blogContents">
                    <div className="blogHeader">
                      <p>
                        {/* ENTER BLOG TITLE HERE */}
                        {blog.title}
                        {/* hi */}
                      </p>
                    </div>
                    <div className="blogBy">
                      <span className="author">
                        {/* ENTER BLOG BY NAME HERE */}
                        {blog.author?.fullName}
                        {/* hello */}
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
                        {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}2
                        weeks ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </>
    );
  }
  return <>
    <div className="homeLoanTitleDiv">
      <label className="homeLoanTitle">Home Load</label>
      <span className="homeLoanViewAllButton">View All</span>
    </div>
    <div className="homeLoanCardDiv"></div>
  </>;
};

export default HomeLoan;
