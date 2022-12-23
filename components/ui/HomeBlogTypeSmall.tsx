import React from "react";
import { Icon } from "@iconify/react";

const HomeBlogTypeSmall = ({ blog = {} }: any) => {
  console.log(blog);
  if (Object.keys(blog).length > 0)
    return (
      <>
        <div
          className="homeBlogTypeSmall"
          style={{ backgroundImage: "{images}" }}
        >
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
                HI
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else return null;
};

export default HomeBlogTypeSmall;
