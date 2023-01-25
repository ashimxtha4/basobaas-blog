import Image from "next/image";
import { Icon } from "@iconify/react";
import Chitra from "../../public/Images/homeLoanImage1.svg";

const CategorySpecificBlog = ({ blog }: { blog: any }) => {
  return (
    <>
      <div className="categorySpecificBlog">
        <div className="imageContainer">
          <Image
            className="blogListingImage"
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
              blog?.id
            }/${blog?.images[0]}`}
            alt="Blog Picture"
            width={345}
            height={172}
          />
        </div>
        <div className="blogContents">
          <div className="blogHeaderSectionContainer">
            <div className="blogCategoryTitle">
              <p>{blog.tags}</p>
            </div>
            <div className="blogHeader">
              <p>{blog.title_np}</p>
            </div>
          </div>
          <div className="blogBody">
            <p>{blog.content}</p>
          </div>
          <div className="blogBy">
            <span className="author">राजन अधिकारी</span>
            <span className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#969696"
              />
            </span>
            <span className="posted">{blog.postedOn}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySpecificBlog;
