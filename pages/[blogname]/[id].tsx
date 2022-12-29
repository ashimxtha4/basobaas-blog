import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAll } from "../../apiFetch/homePage/homePageAPI";
import CategorySpecificBlog from "../../components/ui/CategorySpecificBlog";
import BlogBodyRightSidebar from "../../layouts/BlogBodyRightSidebar";
import BlogNavbar from "../../layouts/BlogNavbar";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllBlogsByCat = async (id: string) => {
    try {
      setLoading(true);
      const { blogs } = await getAll("/blogs?category=" + id);
      setLoading(false);

      if (blogs) setBlogs(blogs);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (router.isReady) {
      getAllBlogsByCat(query.id as string);
    }
  }, [router.isReady, query.id]);

  return (
    <>
      <div>
        <BlogNavbar />
      </div>
      <div className="bodyContainer">
        <div className="categoryBlogBody">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : !blogs.length ? (
            <h1>No Blogs Found</h1>
          ) : (
            <div className="leftBodySection">
              <div className="leftHeaderSection">
                <div className="categoryHeader">
                  <p className="categoryInfo">Category</p>
                  <p className="categoryTitle">{blogs[0].category?.name}</p>
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
                {blogs.map((i, index) => {
                  return <CategorySpecificBlog key={index} blog={i} />;
                })}{" "}
              </div>
            </div>
          )}

          {/* -------------------RIGHT SIDEBAR---------------------- */}
          <div className="rightSidebar">
            <BlogBodyRightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
