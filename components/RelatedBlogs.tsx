import Link from "next/link";
import React from "react";
import { IMG_URL } from "../baseConstants";

const RelatedBlogs = ({ blog }: { blog: any }) => {
  return (
    <>
      <Link
        className="LinkHover"
        href={{
          pathname: `/blogDetails/${blog?._id}`,
        }}
      >
        <div className="relatedBlogs">
          <div className="imageContainer">
            <img src={`${IMG_URL as string}` + `${blog.images[0]}`} />
          </div>
          <div className="contentContainer">
            <div className="categoryTitle">
              <p>{blog.category?.name}</p>
            </div>
            <div className="blogHeader">
              <p>{blog.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RelatedBlogs;
