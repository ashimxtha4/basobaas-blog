import Link from "next/link";
import Navbar from "../layouts/Navbar";
import BlogNavbar from "../layouts/BlogNavbar";
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall";
import HomeBlogTypeMain from "../components/ui/HomeBlogTypeMain";
import MarketNewsTypeMain from "../components/ui/MarketNewsTypeMain";
import MarketNewsTypeSecondary from "../components/ui/MarketNewsTypeSecondary";
import LifeStyle from "../components/ui/LifeStyle";
import HomeLoan from "../components/ui/HomeLoan";
import OurThoughts from "../components/ui/OurThoughts";
import LawAndPolicy from "../components/ui/LawAndPolicy";
import MainProperty from "../components/ui/MainProperty";
import BottomComponent from "../components/ui/bottomComponent";
import Footer from "../layouts/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch, store } from "../state";
import { useEffect, useRef } from "react";
import {
  fetchPremiumProperties,
  fetchLatestProperties,
} from "../state/actions/actions";
import {
  fetchBlogs,
  fetchCategory,
  fetchVideos,
} from "../state/actions/actions";
import Skeleton from "../components/ui/skeleton";
import { SkeletonLine } from "../components/ui/skeleton";
import { PageAndTitleDesc } from "../utilities/PageAndTitleDesc";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const property_videos = useAppSelector(
    (state) => state?.videoData?.property_videos?.items
  );
  const educational_videos = useAppSelector(
    (state) => state?.videoData?.educational_videos?.items
  );
  const basobaas_roundup = useAppSelector(
    (state) => state?.videoData?.basobaas_roundup?.items
  );

  const marketData = useAppSelector(
    (state) => state?.blogData?.market_news?.items
  );
  const { data, loading } = useAppSelector((state) => state.blogData);

  const { data: premiumPropertyData, loading: premiumPropertyLoading } =
    useAppSelector((state) => state.premiumPropertyData);

  const { data: latestPropertyData, loading: latestPropertyLoading } =
    useAppSelector((state) => state.latestPropertyData);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 5,
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 4,
          cate_slug: "market_news",
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 3,
          cate_slug: "lifestyle",
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 3,
          cate_slug: "home_loan",
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 3,
          cate_slug: "our_thoughts",
        })
      );
      dispatch(
        fetchBlogs({
          page: 1,
          perPage: 4,
          cate_slug: "law_and_policy",
        })
      );
      dispatch(fetchCategory());
      dispatch(fetchVideos("educational_videos"));
      dispatch(fetchVideos("basobaas_roundup"));
      dispatch(fetchVideos("property_videos"));
      dispatch(fetchVideos("educational_videos"));
      dispatch(fetchPremiumProperties());
      dispatch(fetchLatestProperties());
    }
  }, [dispatch]);

  return (
    <>
      <PageAndTitleDesc
        title={"Basobaas News - Real Estate News, Reports & Lifestyle In Nepal"}
        desc={
          "Basobaas Insights is your go-to place for real estate investment trends, property market analysis, lifestyle, home decor tips, tourism, and much more in Nepal."
        }
      />

      <div className="navBlend">
        <Navbar />
      </div>
      <div className="aboveNavDivWrapper">
        <div className="aboveNavDiv">
          <div className="newsDiv">
            <div className="newsHeader">
              बसोबास <span className="newsSubHeading">समाचार र लेख</span>
            </div>
            <div className="newsTexts">
              हामी तपाईंलाई घर जग्गा बारे पूर्ण समाचार प्रदान गर्दछौं।
            </div>
          </div>

          <div className="firstAdDiv"></div>
        </div>
      </div>
      <div className="secNavDivWrapper">
        <div className="secNavDiv">
          <BlogNavbar />
        </div>
      </div>

      <div className="alignmentContainer">
        <div className="containerDiv">
          <div className="footerBlend">
            <div className="lowerFooterBlend"></div>
          </div>

          <div className="contentDiv">
            <div className="contentBody">
              <div className="blogPreviewDiv">
                <div className="bigComponent">
                  <HomeBlogTypeMain />
                </div>

                <HomeBlogTypeSmall data={data} loading={loading} />
              </div>

              <div className="adDivs">Ad Div</div>

              <div className="marketNewsDiv">
                <div className="titleDiv">
                  <label className="title">बजार खबर</label>
                  <Link href={"/category/market_news"}>
                    <span className="viewAllButton">सबै हेर्नुहोस्</span>
                  </Link>
                </div>
                <div className="marketNewsContentDiv">
                  <div
                    className="marketBigComponent"
                    onClick={() => {
                      router.push(`/blog/${marketData[0]?.slug}`);
                    }}
                  >
                    <MarketNewsTypeMain />
                  </div>
                  <div className="marketSmallComponentDiv">
                    {loading == "loading" ? (
                      <SkeletonLine height="130px" count={3} />
                    ) : (
                      marketData?.slice(1).map((data: any, index: number) => (
                        <div
                          className="marketSmallComponent"
                          key={index}
                          onClick={() => {
                            router.push(`/blog/${data?.slug}`);
                          }}
                        >
                          <MarketNewsTypeSecondary data={data} />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="adDivs">Ad Div</div>

              <div className="propertyListDiv">
                <div className="propertyListTitleDiv">
                  <label className="propertyListTitle">
                    सम्बन्धित घर जग्गाहरु
                  </label>
                  <span className="propertyListViewAllButton">
                    <Link
                      className="propertyViewLink"
                      href="https://basobaas.com/properties/all-properties"
                      target="_blank"
                    >
                      सबै हेर्नुहोस्
                    </Link>
                  </span>
                </div>
                <div className="propertyCardDiv">
                  {loading != "loading" ? (
                    latestPropertyData?.data
                      ?.slice(0, 10)
                      .map((data: any, index: number) => (
                        <div className="propertyCard" key={index}>
                          <MainProperty data={data} />
                        </div>
                      ))
                  ) : (
                    <>
                      <Skeleton />
                      <Skeleton />
                      {window.innerWidth > 700 && <Skeleton />}
                      {window.innerWidth > 1024 && <Skeleton />}
                    </>
                  )}
                </div>
              </div>
              {loading != "loading" ? (
                <>
                  <div className="lifeStyleDiv">
                    <LifeStyle />
                  </div>

                  <div className="flexTwo">
                    <div className="homeLoanDiv">
                      <HomeLoan />
                    </div>

                    <div className="ourThoughtsDiv">
                      <OurThoughts />
                    </div>
                  </div>

                  <div className="propertyListDiv">
                    <div className="propertyListTitleDiv">
                      <label className="propertyListTitle">
                        विशेष घर जग्गाहरु
                      </label>
                      <span className="propertyListViewAllButton">
                        <Link
                          className="propertyViewLink"
                          href="https://basobaas.com/properties/premium-properties"
                          target="_blank"
                        >
                          सबै हेर्नुहोस्
                        </Link>
                      </span>
                    </div>
                    <div className="propertyCardDiv">
                      {premiumPropertyData?.data
                        ?.slice(0, 10)
                        .map((data: any, index: number) => (
                          <div className="propertyCard" key={index}>
                            <MainProperty data={data} />
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="flexTwo">
                    <div className="lawPolicyDiv">
                      <LawAndPolicy
                        title="कानून र नीति"
                        data={data}
                        cate_slug="law_and_policy"
                      />
                    </div>

                    <div className="lawPolicy2Div">
                      <div className="lawPolicy2TitleDiv">
                        <label className="lawPolicy2Title">
                          घर जग्गाको भिडियो
                        </label>
                        <span className="lawPolicy2ViewAllButton">
                          <Link
                            href={"https://www.youtube.com/@Basobaas/playlists"}
                            target="_blank"
                          >
                            सबै हेर्नुहोस्
                          </Link>
                        </span>
                      </div>
                      <div className="lawPolicy2CardDiv">
                        {property_videos.map((video: any, index: number) => (
                          <div className="lawPolicy2Card" key={index}>
                            <BottomComponent data={video} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flexThree">
                    <div className="flexThreeChild1Div">
                      <div className="flexThreeChild1TitleDiv">
                        <label className="flexThreeChild1Title">
                          घर जग्गाको भिडियो
                        </label>
                        <span className="flexThreeChild1ViewAllButton">
                          <Link
                            href={"https://www.youtube.com/@Basobaas/playlists"}
                            target="_blank"
                          >
                            सबै हेर्नुहोस्
                          </Link>
                        </span>
                      </div>
                      <div className="flexThreeChild1CardDiv">
                        {property_videos.map((video: any, index: number) => (
                          <div className="lawPolicy2Card" key={index}>
                            <BottomComponent data={video} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flexThreeChildDiv">
                      <div className="flexThreeChildTitleDiv">
                        <label className="flexThreeChildTitle">
                          बासोबास राउन्डअप
                        </label>
                        <span className="flexThreeChildViewAllButton">
                          <Link
                            href={"https://www.youtube.com/@Basobaas/playlists"}
                            target="_blank"
                          >
                            सबै हेर्नुहोस्
                          </Link>
                        </span>
                      </div>
                      <div className="flexThreeChildCardDiv">
                        {basobaas_roundup.map((video: any, index: number) => (
                          <div className="flexThreeChildCard" key={index}>
                            <BottomComponent data={video} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flexThreeChildDiv">
                      <div className="flexThreeChildTitleDiv">
                        <label className="flexThreeChildTitle">
                          शैक्षिक भिडियो
                        </label>
                        <span className="flexThreeChildViewAllButton">
                          <Link
                            href={"https://www.youtube.com/@Basobaas/playlists"}
                            target="_blank"
                          >
                            सबै हेर्नुहोस्
                          </Link>
                        </span>
                      </div>
                      <div className="flexThreeChildCardDiv">
                        {educational_videos.map((video: any, index: number) => (
                          <div className="flexThreeChildCard" key={index}>
                            <BottomComponent data={video} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="contentFooter">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
