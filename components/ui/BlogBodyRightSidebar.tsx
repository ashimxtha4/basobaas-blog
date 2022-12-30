import React from "react";
import RelatedBlogs from "../RelatedBlogs";

const BlogBodyRightSidebar = () => {
  return (
    <>
      <div className="rightSidebar">
        <div className="adBody"></div>
        <div className="relatedSection">
          <div className="relatedSectionTitle">
            <p>Related</p>
            <button>View All</button>
          </div>
          <div className="relatedSectionContainer">
            <RelatedBlogs />
          </div>
        </div>
        <div className="featuredSection">
          <div className="featuredSectionTitle">
            <p>Featured Properties</p>
            <button>View All</button>
          </div>
          <div className="featuredSectionContainer">
            <RelatedBlogs />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBodyRightSidebar;
