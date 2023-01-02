import React from "react";

const RelatedBlogs = ({ blog }: { blog: any }) => {
  return (
    <>
      <div className="relatedBlogs">
        <div className="imageContainer">
          <img src="" />
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
    </>
  );
};

export default RelatedBlogs;
