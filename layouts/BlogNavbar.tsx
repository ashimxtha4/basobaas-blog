import { Icon } from "@iconify/react";

const BlogNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand blogNavbar">
        <div className="navbarContainer">
          <div className="navbarTop">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Market News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lifestyle
                </a>
              </li>
              <li className="nav-item dropdown moreDropDown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    More
                    <Icon
                      icon="ri:arrow-drop-down-line"
                      width="18"
                      height="18"
                    />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Law & Policies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Our Thoughts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item expandedNavItems">
                <a className="nav-link" href="#">
                  Home Loan
                </a>
              </li>
              <li className="nav-item expandedNavItems">
                <a className="nav-link" href="#">
                  Life & Policies
                </a>
              </li>
              <li className="nav-item expandedNavItems">
                <a className="nav-link" href="#">
                  Our Thoughts
                </a>
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
              <div>
                <select
                  className="languageSelect"
                  aria-label=".form-select-sm example"
                >
                  <option value="np">Nep</option>
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
