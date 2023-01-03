import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import RelatedBlogs from "../components/RelatedBlogs";
import FeaturedProperties from "../components/ui/FeaturedProperties";

const BlogBodyRightSidebar = ({ blog }: { blog: any[] }) => {
  const [property, setProperty] = useState([]);

  //GET PROPERTY BY CONDITION WHERE PROPERTY ARE FEATURED
  const getSpecificProperties = async () => {
    try {
      const { properties } = await getAll(`/properties?limit=5`);
      if (properties) {
        setProperty(properties);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //TO HANDEL FIRST RENDER
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      getSpecificProperties();
    }
  }, []);
  return (
    <>
      <div className="rightSidebar">
        <div className="relatedSection">
          <div className="relatedSectionTitle">
            <p>Related</p>
            <button>View All</button>
          </div>

          <div className="relatedSectionContainer">
            {blog?.map((item, index) => {
              return <RelatedBlogs blog={item} key={index} />;
            })}
          </div>
        </div>
        <div className="featuredSection">
          <div className="featuredSectionTitle">
            <p>Featured Properties</p>
            <button>
              <Link href="https://basobaas.com/properties/all-properties">
                View All
              </Link>
            </button>
          </div>
          {property.map((property, index) => {
            return (
              <div className="featuredSectionContainer" key={index}>
                <FeaturedProperties property={property} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogBodyRightSidebar;
