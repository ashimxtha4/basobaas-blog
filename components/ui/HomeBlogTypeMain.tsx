import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const HomeBlogTypeMain = ({ blog = {} }) => {
  console.log(blog);
  if (Object.keys(blog).length > 0)
    return (
      <>
        <div
          className="homeBlogTypeMain"
          // style={{backgroundImage: `url(${blog.images[0]})` }}
        >
          <source srcSet="https://example.com/hero.avif" type="image/avif" />
          <source srcSet="https://example.com/hero.webp" type="image/webp" />
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="Landscape picture"
          />
          <div className="cardContent">
            <div className="blogCategoryTag">
              <p>
                {/* ENTER BLOG CATEGORY NAME HERE */}
                {blog.category?.name}
                {/* HI */}
              </p>
            </div>
            <div className="blogTitle">
              <p>
                {/* ENTER BLOG TITLE NAME HERE */}
                {blog.title}
                {/* HI */}
              </p>
            </div>
            <div className="blogBy">
              <p className="author">
                {/* ENTER BLOG BY NAME HERE */}
                {blog.author?.fullName}
                {/* HI */}
              </p>
              <div className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#FFFFFF"
                />
              </div>
              <p className="posted">
                {/* CALCULATE DATE AGO HERE BY USING MOMENT.JS */}2 weeks ago
              </p>
            </div>
          </div>
        </div>
      </>
    );
  else return null;
};

export default HomeBlogTypeMain;
