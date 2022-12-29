import { GetServerSideProps, NextPage } from "next";
import React from "react";
import CategorySpecificBlog from "../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../layouts/BlogBodyRightSidebar";
import { Icon } from "@iconify/react";
import BlogNavbar from "../layouts/BlogNavbar";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);
  return {
    props: {},
  };
};
const categoryBlogs: NextPage = () => {
  return (
    <>
      <div>
        <BlogNavbar />
      </div>
      <div className="bodyContainer">
        <div className="categoryBlogBody">
          <div className="leftBodySection">
            <div className="leftHeaderSection">
              <div className="categoryHeader">
                <p className="categoryInfo">Category</p>
                <p className="categoryTitle">MarketNews</p>
              </div>
              <div className="sortSection">
                <span className="sortTitle">Sort By:</span>
                <span className="sortButton">
                  <select
                    id="dd"
                    className="subCategorySelect"
                    // aria-label=".form-select-sm example"
                  >
                    <option value="np">Nep</option>
                  </select>
                  <Icon
                    className="selectArrow"
                    icon="ri:arrow-drop-down-line"
                    width="30"
                    height="30"
                  />
                </span>
              </div>
            </div>
            <div>
              <CategorySpecificBlog />
            </div>
          </div>

          {/* -------------------RIGHT SIDEBAR---------------------- */}
          <div className="rightSidebar">
            <BlogBodyRightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default categoryBlogs;
