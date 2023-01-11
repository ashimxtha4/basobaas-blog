import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import RelatedBlogs from "../components/RelatedBlogs";
import FeaturedProperties from "../components/ui/FeaturedProperties";
import { useRouter } from "next/router";

const BlogBodyRightSidebar = (
  // { blog }: { blog: any[] }
  ) => {
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

  const router = useRouter()


  return (
    <>
      <div className="rightSidebar">
        <div className="relatedSection">
          <div className="relatedSectionTitle">
            <p>सम्बन्धित ब्लगहरू</p>
            <Link
              className="relatedBlogsView"
              // href={{
              //   pathname: `/${blog[0]?.category?.name.replaceAll(" ", "")}/${
              //     blog[0]?.category?._id
              //   }`,
              // }}
              href="/कानूनरनिति/63a5c027fd935e139f0bab67"
            >
              <button>सबै हेर्नुहोस्</button>
            </Link>
          </div>

          <div className="relatedSectionContainer" >
            {/* {blog?.map((item, index) => {
              return <RelatedBlogs blog={item} key={index} />;
            })} */}
            <Link href="/कानूनरनिति/63a5c027fd935e139f0bab67"><RelatedBlogs /></Link>
            <Link href="/कानूनरनिति/63a5c027fd935e139f0bab67"><RelatedBlogs /></Link>
            <Link href="/कानूनरनिति/63a5c027fd935e139f0bab67"><RelatedBlogs /></Link>
          </div>
        </div>
        <div className="featuredSection">
          <div className="featuredSectionTitle">
            <p>विशेष घर जग्गाहरु</p>
            <button>
              <Link href="https://basobaas.com/properties/all-properties">
                सबै हेर्नुहोस्
              </Link>
            </button>
          </div>
          {/* {property.map((property, index) => {
            return (
              <div className="featuredSectionContainer" key={index}>
                <FeaturedProperties property={property} />
              </div>
            );
          })} */}
          <FeaturedProperties />
          <FeaturedProperties />
          <FeaturedProperties />
        </div>
      </div>
    </>
  );
};

export default BlogBodyRightSidebar;
