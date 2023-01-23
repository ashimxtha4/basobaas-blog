import Link from "next/link";
import RelatedBlogs from "../components/ui/RelatedBlogs";
import FeaturedProperties from "../components/ui/FeaturedProperties";
import RelatedBlogImage1 from "../public/Images/relatedBlogsImage1.svg";
import RelatedBlogImage2 from "../public/Images/relatedBlogsImage2.svg";
import RelatedBlogImage3 from "../public/Images/relatedBlogsImage3.svg";
import FeaturedPropertyImage1 from "../public/Images/featuredPropertyImage1.svg";
import FeaturedPropertyImage2 from "../public/Images/featuredPropertyImage2.svg";
import FeaturedPropertyImage3 from "../public/Images/featuredPropertyImage3.svg";

//DUMMY DATA FOR RELATED BLOG
const dummyRelatedBlogsData = [
  {
    thumbnail: RelatedBlogImage1,
    categoryTag: "कानून र नीति",
    title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
  },
  {
    thumbnail: RelatedBlogImage2,
    categoryTag: "कानून र नीति",
    title: "नबिल बैंकले गोठाटारमा भएको घरजग्गा बिक्री गर्ने।",
  },
  {
    thumbnail: RelatedBlogImage3,
    categoryTag: "कानून र नीति",
    title: "नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र,  ७३ प्रतिशत भौतिक प्रगति।",
  },
];

//DUMMY DATA FOR FEATURED PROPERTY
const dummyPropertyData = [
  {
    thumbnail: FeaturedPropertyImage1,
    title: "Karyabinayak Homes",
    address: "Karyabinayak, Lalitpur",
    beds: 2,
    bath: 1,
    sqft: 1200,
    price: "39.5 Lakhs",
    priceLabel: "Anna",
  },
  {
    thumbnail: FeaturedPropertyImage2,
    title: "Civil Homes",
    address: "Kalimati, Kathmandu",
    beds: 3,
    bath: 3,
    sqft: 3200,
    price: "3.55 Crore",
    priceLabel: "Onwards",
  },
  {
    thumbnail: FeaturedPropertyImage3,
    title: "Padma Colony",
    address: "Sitapaila Rd 5, Nagarjun 44600",
    beds: 4,
    bath: 5,
    sqft: 5790,
    price: "5.75 Crore",
    priceLabel: "Total Price",
  },
];

const BlogBodyRightSidebar = ({
  relatedBlogData,
}: {
  relatedBlogData: any[];
}) => {
  return (
    <>
      <div className="rightSidebar">
        <div className="relatedSection">
          <div className="relatedSectionTitle">
            <p>सम्बन्धित ब्लगहरू</p>
            <Link
              className="relatedBlogsView"
              href="/कानूनरनिति/63a5c027fd935e139f0bab67"
            >
              <button>सबै हेर्नुहोस्</button>
            </Link>
          </div>

          <div className="relatedSectionContainer">
            {relatedBlogData?.map((blog: any, index: number) => {
              return (
                <Link
                  className="blogComponentLinks"
                  href="/blogDetails/123"
                  key={index}
                >
                  <RelatedBlogs blog={relatedBlogData} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="featuredSection">
          <div className="featuredSectionTitle">
            <p>विशेष घर जग्गाहरु</p>
            <button>
              <Link href="https://basobaas.com/properties/all-properties">
                सबै हेर्नुहोस्
              </Link>
            </button>
          </div>

          {dummyPropertyData?.map((property, index) => {
            return (
              <Link
                style={{ transform: "none" }}
                href="https://basobaas.com/premium/house-for-sale-at-sitapaila-1565"
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
