import Image from "next/image";
import { Icon } from "@iconify/react";
import { useAppSelector } from "../../state";
import Skeleton from "./skeleton";
import { SkeletonLine } from "./skeleton";
import { dateFormatter } from "../../utilities/helper";
import moment from "moment";
// import lqip from 'lqip-modern';
import { useRef, useEffect } from "react";
import image from "../../public/Favicon.png";

async function changeImage() {
  // return result;
}

const CategorySpecificBlog = ({ blog }: { blog: any }) => {
  const loading = useAppSelector((state) => state.blogData.loading);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender) {
      firstRender.current = false;
      // console.log("changed Image",changeImage())
    }
  });
  return (
    <>
      <div className="categorySpecificBlog">
        <div className="imageContainer">
          {loading == "loading" && blog == undefined ? (
            <Skeleton />
          ) : (
            <Image
              className="blogListingImage"
              src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                blog?.id
              }/${blog?.images[0]}`}
              alt="Blog Picture"
              width={400}
              height={250}
              loading={"eager"}
              priority
            />
          )}
        </div>
        <div className="blogContents">
          <div className="blogHeaderSectionContainer">
            <div className="blogCategoryTitle">
              {loading == "loading" && blog == undefined ? (
                <SkeletonLine height="14px" count={1} />
              ) : (
                <p>{blog.tags}</p>
              )}
            </div>
            <div className="blogHeader">
              {loading == "loading" && blog == undefined ? (
                <SkeletonLine height="24px" count={1} />
              ) : (
                // <SkeletonLine height="28px" count={1} />
                <p>{blog.title_np}</p>
              )}
            </div>
          </div>
          <div className="blogBody">
            {loading == "loading" && blog == undefined ? (
              <SkeletonLine height="20" count={3} />
            ) : (
              <p>{blog.content}</p>
            )}
          </div>
          <div className="blogBy">
            {loading == "loading" && blog == undefined ? (
              <SkeletonLine height="20" count={3} />
            ) : (
              <>
                <span className="author">राजन अधिकारी</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">
                  {dateFormatter(moment(`${blog?.created}`).fromNow())}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySpecificBlog;
