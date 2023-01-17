import Image from "next/image";
import { Icon } from "@iconify/react";

const CategorySpecificBlog = ({ blog }: { blog: any }) => {
  return (
    <>
      <div className="categorySpecificBlog">
        <div className="imageContainer">
          <Image
            className="blogListingImage"
            src={blog.thumbnail}
            alt="Blog Picture"
            width={345}
            height={172}
          />
        </div>
        <div className="blogContents">
          <div className="blogHeaderSectionContainer">
            <div className="blogCategoryTitle">
              <p>{blog.categoryTag}</p>
            </div>
            <div className="blogHeader">
              <p>{blog.title}</p>
            </div>
          </div>
          <div className="blogBody">
            <p>{blog.content}</p>
          </div>
          <div className="blogBy">
            <span className="author">{blog.author}</span>
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
