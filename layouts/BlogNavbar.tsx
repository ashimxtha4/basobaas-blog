import { Icon } from "@iconify/react";
import Link from "next/link";

const BlogNavbar = () => {
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
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogNavbar;
