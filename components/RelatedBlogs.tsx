import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMG_URL } from "../baseConstants";
import RelatedBlogsImage from "../public/Images/Related1.svg";

// const RelatedBlogs = ({ blog }: { blog: any }) => {
const RelatedBlogs = () => {
  return (
    <>
      {/* <Link
        className="LinkHover"
        href={{
          pathname: `/blogDetails/${blog?._id}`,
        }}
      > */}
      <div className="relatedBlogs">
        <div className="imageContainer">
          {/* <img src={`${IMG_URL as string}` + `${blog.images[0]}`} /> */}
          <Image
            src={RelatedBlogsImage}
            alt="Picture of the author"
            className="relatedBlogImages"
          />
        </div>
        <div className="contentContainer">
          <div className="categoryTitle">
            <p>
              {/* {blog.category?.name} */}
              यात्रा
            </p>
          </div>
          <div className="blogHeader">
            <p>
              {/* {blog.title} */}
              सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।
            </p>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default RelatedBlogs;
