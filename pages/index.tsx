import BlogNavbar from "../layouts/BlogNavbar";
import { getAll } from "../apiFetch/homePage/homePageAPI";
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall";
import HomeBlogTypeMain from "../components/ui/HomeBlogTypeMain";
import { useEffect, useState, useRef } from "react";
import MarketNewsTypeMain from "../components/ui/MarketNewsTypeMain";
import MarketNewsTypeSecondary from "../components/ui/MarketNewsTypeSecondary";
import LifeStyle from "../components/ui/LifeStyle";
import HomeLoan from "../components/ui/HomeLoan";
import OurThoughts from "../components/ui/OurThoughts";
import LawAndPolicy from "../components/ui/LawAndPolicy";
import MainProperty from "../components/ui/MainProperty";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export const getBlogByCategory = async (id: String, limit?: number) => {
  var url = `/blogs?category=${id}`;
  if (limit) {
    url += `&limit=${limit}`;
  }
  try {
    const { blogs } = await getAll(url);
    if (blogs.length) {
      return Promise.resolve(blogs);
    }
    return Promise.reject("blog not found");
  } catch (error) {
    return Promise.reject("SomeThing Went Wrong");
  }
};
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
        setData((prev: any) => ({
          ...prev,
          blogsByCategory: [...prev.blogsByCategory, blogs[0]],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        setData((prev: any) => ({
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
        <div className="navBlend"><Navbar/></div>
        <div className="containerDiv">
          <div className="secNavBlend"></div>
          <div className="footerBlend"></div>

          <div className="contentDiv">
            <div className="aboveNavDiv">
              <div className="newsDiv">
                <div className="newsHeader">News & Insights</div>
                <div className="newsTexts">
                  We provide you the complete new about real estate.
                </div>
              </div>

              <div className="firstAdDiv"></div>
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
                          <HomeBlogTypeSmall
                            blog={data.blogsByCategory[index]}
                          />
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
                    {/* <div className="marketSmallComponent"></div>
                    <div className="marketSmallComponent"></div>
                    <div className="marketSmallComponent"></div> */}

                    {Object.values(getMarketNewsBlogs ?? {})
                      .flatMap((i) => i).splice(1,3)
                      .map((i, index) => (
                        <>
                          <div className="marketSmallComponent" key={index}>
                            <MarketNewsTypeSecondary blog={i} />
                          </div>
                        </>
                      ))}

                  </div>
                </div>
              </div>

              <div className="adDiv"></div>

              <div className="propertyListDiv">
                <div className="propertyListTitleDiv">
                  <label className="propertyListTitle">
                    Related Properties
                  </label>
                  <span className="propertyListViewAllButton">View All</span>
                </div>
                <div className="propertyCardDiv">
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>

                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                </div>
              </div>

              <div className="lifeStyleDiv">
                
                <LifeStyle id={data?.categories[1]?.id} />
              </div>

              {/* <div className="lifeStyleDiv">
                <LifeStyle id={data?.categories[1]?.id} />
              </div> */}

              <div className="flexTwo">
                <div className="homeLoanDiv">
                  <HomeLoan id={data?.categories[3]?.id} />
                </div>
                <div className="ourThoughtsDiv">
                  <OurThoughts id={data?.categories[3]?.id} />
                </div>
              </div>

              <div className="propertyListDiv">
                <div className="propertyListTitleDiv">
                  <label className="propertyListTitle">
                    Featured Properties
                  </label>
                  <span className="propertyListViewAllButton">View All</span>
                </div>
                <div className="propertyCardDiv">
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>

                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                  <div className="propertyCard"><MainProperty /></div>
                </div>
              </div>

              <div className="flexTwo">
                <div className="lawPolicyDiv">
                  <LawAndPolicy id={data?.categories[4]?.id} />
                </div>

                <div className="lawPolicy2Div">
                  <div className="lawPolicy2TitleDiv">
                    <label className="lawPolicy2Title">Property Video</label>
                    <span className="lawPolicy2ViewAllButton">View All</span>
                  </div>
                  <div className="lawPolicy2CardDiv">
                    <div className="lawPolicy2Card"></div>
                    <div className="lawPolicy2Card"></div>
                    <div className="lawPolicy2Card"></div>
                  </div>
                </div>
              </div>

              <div className="flexThree">
                <div className="flexThreeChild1Div">
                  <div className="flexThreeChild1TitleDiv">
                    <label className="flexThreeChild1Title">
                      Property Video
                    </label>
                    <span className="flexThreeChild1ViewAllButton">
                      View All
                    </span>
                  </div>
                  <div className="flexThreeChild1CardDiv">
                    <div className="flexThreeChild1Card"></div>
                    <div className="flexThreeChild1Card"></div>
                    <div className="flexThreeChild1Card"></div>
                  </div>
                </div>

                <div className="flexThreeChildDiv">
                  <div className="flexThreeChildTitleDiv">
                    <label className="flexThreeChildTitle">
                      Basobaas Roundup
                    </label>
                    <span className="flexThreeChildViewAllButton">
                      View All
                    </span>
                  </div>
                  <div className="flexThreeChildCardDiv">
                    <div className="flexThreeChildCard"></div>
                    <div className="flexThreeChildCard"></div>
                    <div className="flexThreeChildCard"></div>
                  </div>
                </div>

                <div className="flexThreeChildDiv">
                  <div className="flexThreeChildTitleDiv">
                    <label className="flexThreeChildTitle">
                      Educational Video
                    </label>
                    <span className="flexThreeChildViewAllButton">
                      View All
                    </span>
                  </div>
                  <div className="flexThreeChildCardDiv">
                    <div className="flexThreeChildCard"></div>
                    <div className="flexThreeChildCard"></div>
                    <div className="flexThreeChildCard"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contentFooter"><Footer/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
