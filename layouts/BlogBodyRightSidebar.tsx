import React from "react";
import RelatedBlogs from "../components/RelatedBlogs";
import FeaturedProperties from "../components/ui/FeaturedProperties";

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
            <FeaturedProperties />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBodyRightSidebar;
