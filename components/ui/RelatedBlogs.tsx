import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMG_URL } from "../../baseConstants";
import RelatedBlogsImage1 from "../../public/Images/relatedBlogsImage1.svg";

// const RelatedBlogs = ({ blog }: { blog: any }) => {
const RelatedBlogs = ({ blog }: { blog: any }) => {
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
            // src={RelatedBlogsImage1}
            src={blog.thumbnail}
            alt="Picture of the author"
            className="relatedBlogImages"
          />
        </div>
        <div className="contentContainer">
          <div className="categoryTitle">
            <p>
              {/* {blog.category?.name} */}
              {/* यात्रा */}
              {blog.categoryTag}
            </p>
          </div>
          <div className="blogHeader">
            <p>
              {/* {blog.title} */}
              {/* सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र। */}
              {blog.title}
            </p>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default RelatedBlogs;