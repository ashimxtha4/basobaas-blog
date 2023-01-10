import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeBlogMainImage from "../../public/Images/blogDetails.svg";
import Image from "next/image";

const HomeBlogTypeMain = () =>
  // { blog = {} }: any
  {
    const router = useRouter();
    // if (Object.keys(blog).length > 0)
    return (
      <>
        <Link
          style={{display:"inlineBlock"}}
          href={{
            pathname: `/blogDetails/${123}`,
          }}
        >
        <div
          className="homeBlogTypeMain"
          // onClick={() => router.push(`blogDetails/${blog?._id}`)}
        >
          <div className="thumbnail">
            {/* <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g1yXNKpomzJ1y2AKUS2dJbCDEne6SjH_2fA4GLVA-g&s"
                src={imageUrlCheck(blog.images[0] as string)}
                className="blogCardBackground"
                alt="Basobaas Nepal"
              /> */}
            <Image
              className="blogCardBackground"
              src={HomeBlogMainImage}
              alt="Basobaas Nepal"
            />
          </div>
          <div className="cardContent">
            <div className="blogCategoryTag">
              <p>
                {/* {blog.category?.name} */}
                यात्रा
              </p>
            </div>
            <div className="blogTitle">
              <p>
                {/* {blog.title} */}
                सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।
              </p>
            </div>
            <div className="blogBy">
              <div className="author">
                {/* {blog.author?.fullName} */}
                राजन अधिकारी
              </div>
              <div className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#FFFFFF"
                />
              </div>
              <div className="posted">
                {/* {createdAt} */}
                {/* {blogPostedDate} */}२ हप्ता अघि
              </div>
            </div>
          </div>
        </div>
        </Link>
      </>
    );
    // else return null;
  };

export default HomeBlogTypeMain;
