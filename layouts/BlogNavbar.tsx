import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAppSelector } from "../state";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { request } from "../apis/request";

const BlogNavbar = () => {
  const router = useRouter();
  const categories = useAppSelector((state) => state.categoryData.data.items);
  const categoryList = categories?.filter((obj: any) => obj.parent_cate == "");
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
  // const searchField = useRef();

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
                      href={
                        data?.cate_slug === "video"
                          ? "https://www.youtube.com/@Basobaas/playlists"
                          : "/category/" + data?.cate_slug
                      }
                      target={data?.cate_slug == "video" ? "_blank" : "_self"}
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
                        categoryList[categoryList?.length - 1]?.cate_slug ===
                        "video"
                          ? "https://www.youtube.com/@Basobaas/playlists"
                          : "/category/" +
                            categoryList[categoryList?.length - 1]?.cate_slug
                      }
                      target={
                        categoryList[categoryList?.length - 1]?.cate_slug ==
                        "video"
                          ? "_blank"
                          : "_self"
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
                            href={
                              data?.cate_slug === "video"
                                ? "https://www.youtube.com/@Basobaas/playlists"
                                : "/category/" + data?.cate_slug
                            }
                            target={
                              data?.cate_slug == "video" ? "_blank" : "_self"
                            }
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
            <form
              className="m-0 p-0"
              role="search"
              autoComplete="off"
              onSubmit={(e: any) => {
                e.preventDefault();
                //@ts-ignore
                if (document?.getElementById("search")?.value) {
                  router.push(
                    //@ts-ignore
                    `/search/${document?.getElementById("search")?.value}`
                  );
                  request.postKeywords(
                    //@ts-ignore
                    document?.getElementById("search")?.value
                  );
                }
              }}
            >
              <div className="searchSection">
                <input
                  className="form-control searchBox"
                  type="search"
                  placeholder="Search blogs, articles & news"
                  aria-label="Search"
                  name="search"
                  id="search"
                  // ref={searchField}
                />
                <button type="submit" className="searchIconButton">
                  <Icon
                    className="searchIcon"
                    icon="ph:magnifying-glass-bold"
                    width="18"
                    height="18"
                    color="#545454"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogNavbar;
