import MainLayout from "../layouts/mainLayout";
import BlogNavbar from "../layouts/BlogNavbar";
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import { useEffect, useState, useRef } from "react";
import HomeBlogTypeMain from "../components/ui/HomeBlogTypeMain";

const HomePage = () => {
  const [data, setData] = useState({
    // blogs: [],
    categories: [],
    catBlogs: [],
  });

  const getCategories = async () => {
    try {
      const { blogCategories } = await getAll("/blogCategory");
      if (blogCategories)
        setData((prev) => ({ ...prev, categories: blogCategories }));
    } catch (error) {}
  };

  const getBlogByCategory = async (id: String) => {
    try {
      const { blogs } = await getAll(`/blogs?category=${id}&limit=1`);
      setData((prev) => ({ ...prev,catBlogs:[...prev.catBlogs, blogs[0]] }));
    } catch (error) {
      console.log(error);
    }
  };

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      // getBlogs();
      getCategories();
    }

    if (data.categories?.length > 0) {
      data.categories.map((category: any,index:number) => {
        if(index<4)
          getBlogByCategory(category._id);
      });
    }
  }, [data.categories.length]);

  return (
    <>
      <div className="alignmentContainer">
        <div className="navBlend"></div>

        <div className="contentDiv">
          <div className="aboveNavDiv">
            <div className="newsDiv">
              <div className="newsHeader">News & Insights</div>
              <div className="newsTexts">
                We provide you the complete new about real estate.
              </div>
              <div className="firstAdDiv"></div>
            </div>
          </div>

          <div className="secNavDiv">
            <BlogNavbar />
          </div>

          <div className="contentBody">
            <div className="blogPreviewDiv">
              <div className="bigComponent">
                <HomeBlogTypeMain blog={data.catBlogs[0]}/>
              </div>
              <div className="smallComponentDiv">
                {
                  data.catBlogs.map((catBlog,index)=>{
                    if(index>0 && index<5)
                     return <div className="smallComponent">
                      <HomeBlogTypeSmall blog={data.catBlogs[index]}/>
                    </div>
                  })
                }
              </div>
            </div>

            <div className="adDiv"></div>

            <div className="marketNewsDiv">
              <div className="titleDiv">
                <label className="title">Market New</label>
                <span className="viewAllButton">View All</span>
              </div>
              <div className="marketNewsContentDiv">
                <div className="marketBigComponent"></div>
                <div className="marketSmallComponentDIv">
                  <div className="marketSmallComponent"></div>
                  <div className="marketSmallComponent"></div>
                  <div className="marketSmallComponent"></div>
                  <div className="marketSmallComponent"></div>
                </div>
              </div>
            </div>

            <div className="adDiv"></div>

            <div className="propertyListDiv"></div>
          </div>

          <div className="contentFooter"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
