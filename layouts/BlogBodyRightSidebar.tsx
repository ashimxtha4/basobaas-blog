import Link from "next/link";
import RelatedBlogs from "../components/ui/RelatedBlogs";
import FeaturedProperties from "../components/ui/FeaturedProperties";
import RelatedBlogImage1 from "../public/Images/relatedBlogsImage1.svg";
import RelatedBlogImage2 from "../public/Images/relatedBlogsImage2.svg";
import RelatedBlogImage3 from "../public/Images/relatedBlogsImage3.svg";
import FeaturedPropertyImage1 from "../public/Images/featuredPropertyImage1.svg";
import FeaturedPropertyImage2 from "../public/Images/featuredPropertyImage2.svg";
import FeaturedPropertyImage3 from "../public/Images/featuredPropertyImage3.svg";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state";
import { fetchBlogs, fetchLatestProperties } from "../state/actions/actions";
import { useRouter } from "next/router";

const BlogBodyRightSidebar = ({
  relatedBlogData,
}: {
  relatedBlogData: string;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const relatedBlogValues = useAppSelector(
    (state) => state.blogData.blogByCategoryId.items
  );
  const categoryList = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );

  const { data, loading } = useAppSelector(
    (state) => state?.premiumPropertyData
  );
  useEffect(() => {
    if (router.isReady) {
      dispatch(
        fetchBlogs({
          categoryId: relatedBlogData,
        })
      );
      dispatch(fetchLatestProperties());
    }
  }, [dispatch, router.isReady, relatedBlogData]);
  return (
    <>
      <div className="rightSidebar">
        {relatedBlogData && (
          <div className="relatedSection">
            <div className="relatedSectionTitle">
              <p>सम्बन्धित ब्लगहरू</p>
              <Link
                className="relatedBlogsView"
                href={
                  "/category/" +
                  categoryList?.find((obj: any) => obj?.id == relatedBlogData)
                    ?.cate_slug
                }
              >
                <button>सबै हेर्नुहोस्</button>
              </Link>
            </div>

            <div className="relatedSectionContainer">
              {relatedBlogValues
                ?.slice(0, 3)
                ?.map((blog: any, index: number) => {
                  return (
                    <Link
                      className="blogComponentLinks"
                      href={"/blog/" + blog.slug}
                      key={index}
                    >
                      <RelatedBlogs blog={blog} />
                    </Link>
                  );
                })}
            </div>
          </div>
        )}

        <div className="featuredSection">
          <div className="featuredSectionTitle">
            <p>विशेष घर जग्गाहरु</p>
            <button>
              <Link href="https://basobaas.com/properties/all-properties">
                सबै हेर्नुहोस्
              </Link>
            </button>
          </div>

          {data.data?.slice(0, 3).map((property: any, index: number) => {
            return (
              <Link
                style={{ transform: "none" }}
                href={
                  data.premium
                    ? `https://basobaas.com/premium/${data.slug}`
                    : `https://basobaas.com/property/${data.slug}`
                }
                target="_blank"
                key={index}
              >
                <FeaturedProperties property={property} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogBodyRightSidebar;
