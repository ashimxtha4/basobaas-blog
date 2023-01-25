import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAppSelector } from "../state";
import { useEffect, useState } from "react";

const BlogNavbar = () => {
  const categoryList = useAppSelector((state) => state.categoryData.data.items);
  const [screenSize, setScreenSize] = useState<number>(375);
  useEffect(() => {
    setScreenSize(screen.width);
    window.onresize = () => setScreenSize(screen.width);
  });

  const check = () => {
    if (screenSize < 400) return 2;
    else if (screenSize >= 400 && screenSize < 712) return 3;
    else if (screenSize >= 712 && screenSize < 1024) return 5;
    else if (screenSize >= 1024 && screenSize < 1200) return 3;
    else if (screenSize >= 1200 && screenSize < 1300) return 4;
    else return 5;
  };

  return (
    <>
      <nav className="navbar navbar-expand blogNavbar">
        <div className="navbarContainer">
          <div className="navbarTop">
            <ul className="navbar-nav d-flex flex-row">
              <li>
                <Link className="nav-link active" aria-current="page" href="/">
                  होम पेज
                </Link>
              </li>
              {categoryList
                ?.slice(0, check())
                .map((data: any, index: number) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link"
                      href={"/category/" + data?.cate_slug}
                    >
                      {data?.name_np}
                    </Link>
                  </li>
                ))}

              {categoryList?.length <= check() + 1 ? (
                categoryList?.length == check() + 1 ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href={
                        "/category/" +
                        categoryList?.[categoryList?.length - 1]?.cate_slug
                      }
                    >
                      {categoryList[categoryList?.length - 1]?.name_np}
                    </Link>
                  </li>
                ) : null
              ) : (
                <li className="nav-item dropdown moreDropDown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>
                      अन्य
                      <Icon
                        icon="ri:arrow-drop-down-line"
                        width="18"
                        height="18"
                      />
                    </span>
                  </span>
                  <ul className="dropdown-menu">
                    {categoryList
                      ?.slice(check())
                      .map((data: any, index: number) => (
                        <li className="nav-item" key={index}>
                          <Link
                            className="nav-link"
                            href={"/category/" + data?.cate_slug}
                          >
                            {data?.name_np}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              )}
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
