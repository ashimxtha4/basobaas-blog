import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { imageUrlCheck } from "../../utilities/helper";
import Link from "next/link";
import {useRouter} from "next/router";

const HomeBlogTypeMain = ({ blog = {} }: any) => {
  const router= useRouter()
  if (Object.keys(blog).length > 0)
    return (
      <>
        {/* <Link
          style={{display:"inlineBlock"}}
          href={{
            pathname: `blogDetails/${blog?._id}`,
          }}
        > */}
          <div className="homeBlogTypeMain" onClick={()=>router.push(`blogDetails/${blog?._id}`)}>
            <div className="thumbnail">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g1yXNKpomzJ1y2AKUS2dJbCDEne6SjH_2fA4GLVA-g&s"
                src={imageUrlCheck(blog.images[0] as string)}
                className="blogCardBackground"
                alt="Basobaas Nepal"
              />
            </div>
            <div className="cardContent">
              <div className="blogCategoryTag">
                <p>{blog.category?.name}</p>
              </div>
              <div className="blogTitle">
                <p>{blog.title}</p>
              </div>
              <div className="blogBy">
                <div className="author">{blog.author?.fullName}</div>
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
                  {/* {blogPostedDate} */}
                  hi
                </div>
              </div>
            </div>
          </div>
        {/* </Link> */}
      </>
    );
  else return null;
};

export default HomeBlogTypeMain;
