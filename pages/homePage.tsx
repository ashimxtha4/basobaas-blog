import MainLayout from "../layouts/mainLayout";
import BlogNavbar from "../layouts/BlogNavbar";
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall";
import HomeBlogTypeMain from "../components/ui/HomeBlogTypeMain";
import { useEffect, useState, useRef } from "react";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import MarketNewsTypeMain from "../components/ui/MarketNewsTypeMain";
import { Console } from "console";
import { access } from "fs";
import MarketNewsTypeSecondary from "../components/ui/MarketNewsTypeSecondary";
import { arrayBuffer } from "stream/consumers";

const HomePage = () => {
  const [data, setData] = useState<{
    categories: any[];
    blogsByCategory: any[];
    blogsWithSameCategory: any[];
  }>({
    categories: [],
    blogsByCategory: [],
    blogsWithSameCategory: [],
  });

  //GET ALL CATEGORIES TO GET CATEGORY ID AND MAP EACH CATEGORY TO GET BLOG
  const getAllCategories = async () => {
    try {
      const { blogCategories } = await getAll("/blogCategory");
      if (blogCategories)
        setData((prev) => ({ ...prev, categories: blogCategories }));
    } catch (error) {
      console.log(error);
    }
  };

  //GET SPECIFIC BLOG BY CONDITION CATEROGY NAME AND DISPLAYED JUST ONCE
  const getBlogByCategory = async (id: String) => {
    try {
      const { blogs } = await getAll(`/blogs?category=${id}&limit=1`);
      if (blogs) {
        setData((prev) => ({
          ...prev,
          blogsByCategory: [...prev.blogsByCategory, blogs[0]],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //GET SPECIFIC CATEGORY UNDER ONE CATEGORY
  const getBlogsUnderOneCategory = async (id: string) => {
    try {
      const SameCategoryBlogs = await getAll(`/blogs?category=${id}`);
      if (SameCategoryBlogs) {
        let blogGroupByName = SameCategoryBlogs.blogs.reduce(
          (acc: any, c: any) => {
            acc[c?.category?.name] = [...(acc[c?.category?.name] || []), c];
            return acc;
          },
          {} as any
        );
        setData((prev) => ({
          ...prev,
          blogsWithSameCategory: [
            ...prev.blogsWithSameCategory,
            blogGroupByName,
          ],
        }));
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
      getAllCategories();
    }

    //TO RENDER LIMITED BLOGS BY CATEGORY
    if (data.categories?.length > 0) {
      //MAPPING
      data.categories.map((category: any, index: number) => {
        if (index > 0 && index <= 5) getBlogByCategory(category._id);
      });
    }

    //TO RENDER LIMITED BLOGS WITH SAME CATEGORY
    if (data.categories?.length > 0) {
      //MAPPING
      data.categories.map((category: any, index: number) => {
        if (index > 0 && index <= 5) getBlogsUnderOneCategory(category._id);
      });
    }
  }, [data.categories.length]);

  const getMarketNewsBlogs = data?.blogsWithSameCategory.find(
    (item) => item["कानून र निति"]
  );
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
                <HomeBlogTypeMain blog={data.blogsByCategory[0]} />
              </div>
              <div className="smallComponentDiv">
                {data.blogsByCategory.map((categorySpecificBlog, index) => {
                  if (index > 0 && index < 5)
                    return (
                      <div className="smallComponent" key={index}>
                        <HomeBlogTypeSmall blog={data.blogsByCategory[index]} />
                      </div>
                    );
                })}
              </div>
            </div>


            <div className="adDiv"></div>


            <div className="marketNewsDiv">
              <div className="titleDiv">
                <label className="title">Market New</label>
                <span className="viewAllButton">View All</span>
              </div>
              <div className="marketNewsContentDiv">
                <div className="marketBigComponent">
                  <MarketNewsTypeMain
                    blog={
                      Object.values(getMarketNewsBlogs ?? {}).flatMap(
                        (i) => i
                      )[0]
                    }
                  />
                </div>
                <div className="marketSmallComponentDiv">
                  {Object.values(getMarketNewsBlogs ?? {})
                    .flatMap((i) => i)
                    .map((i, index) => (
                      <div className="marketSmallComponent" key={index}>
                        <MarketNewsTypeMain blog={i} />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="adDiv"></div>

            <div className="propertyListDiv">
              <div className="propertyListTitleDiv">
                <label className="propertyListTitle">Related Properties</label>
                <span className="propertyListViewAllButton">View All</span>
              </div>
              <div className="propertCardDiv">
                <div className="propertyCard"></div>
              </div>
            </div>

          </div>

          <div className="contentFooter"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;