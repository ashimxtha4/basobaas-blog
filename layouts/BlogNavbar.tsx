import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import { useRef } from "react";

const BlogNavbar = () => {
  // const [category, setCategory] = useState([]);

  // const firstRender = useRef(true);

  // const getAllCategories = async () => {
  //   try {
  //     const { blogCategories } = await getAll("/blogCategory?limit=4");
  //     if (blogCategories) setCategory(blogCategories);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     getAllCategories();
  //   }
  // }, []);

  return (
    <>
      <nav className="navbar navbar-expand blogNavbar">
        <div className="navbarContainer">
          <div className="navbarTop">
            <ul className="navbar-nav navbarTopContents">
              <li className="nav-item">
                <Link className="nav-link active" href={"/"}>
                  होम पेज
                </Link>
              </li>
              {/* {category?.map((item: any, index) => {
                return ( */}
              {/* <li className="nav-item expandedNavItems" key={index}>
                    <a
                      className="nav-link"
                      href={`/${item.name.replaceAll(" ", "")}/${item._id}`}
                    >
                      {item.name}
                    </a>
                  </li> */}
              {/* );
              })} */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  href="/कानूनरनिति/63a5c027fd935e139f0bab67"
                >
                  कानून र नीति
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href={"/"}>
                  बजार अद्यावधिकहरू
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  href="/कानूनरनिति/63a5c027fd935e139f0bab67"
                >
                  होम लोन
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  href="/कानूनरनिति/63a5c027fd935e139f0bab67"
                >
                  डेकोर
                </Link>
              </li>
              <li className="nav-item invi-item">
                <Link
                  className="nav-link active"
                  href="/कानूनरनिति/63a5c027fd935e139f0bab67"
                >
                  हाम्रा विचारहरू
                </Link>
              </li>
              {/* <li className="nav-item expandedNavItems">
                <a className="nav-link" href="#">
                  Life & Policies
                </a>
              </li>
              <li className="nav-item expandedNavItems">
                <a className="nav-link" href="#">
                  Our Thoughts
                </a>
              </li> */}
            </ul>
          </div>
          <div className="navbarBottom">
            <form className="m-0 p-0" role="search">
              <div className="searchSection">
                <input
                  className="form-control searchBox"
                  type="search"
                  placeholder="Search blogs, articles & news"
                  aria-label="Search"
                />
                <Icon
                  className="searchIcon"
                  icon="ph:magnifying-glass-bold"
                  width="18"
                  height="18"
                  color="#545454"
                />
              </div>
              <div>
                <select
                  className="languageSelect"
                  aria-label=".form-select-sm example"
                >
                  <option value="np">नेपाली</option>
                  <option value="en">Eng</option>
                </select>
                <Icon
                  className="selectArrow"
                  icon="ri:arrow-drop-down-line"
                  width="18"
                  height="18"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogNavbar;
