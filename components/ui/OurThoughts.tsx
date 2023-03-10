import { Icon } from "@iconify/react";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { dateFormatter } from "../../utilities/helper";

const OurThoughts = () => {
  const router = useRouter();
  const ourThoughtsData = useAppSelector(
    (state) => state.blogData.our_thoughts.items
  );

  return (
    <>
      <div className="ourThoughtsTitleDiv">
        <label className="ourThoughtsTitle">हाम्रा विचारहरू</label>
        <Link href={"/category/our_thoughts"}>
          <span className="ourThoughtsViewAllButton">सबै हेर्नुहोस्</span>
        </Link>
      </div>
      <div className="ourThoughtsCardDiv">
        {ourThoughtsData.map((data: any, index: number) => (
          <div
            className="ourThoughtsCard"
            key={index}
            onClick={() => {
              router.push(`/blog/${data?.slug}`);
            }}
          >
            <div className="ourThoughts">
              <div className="imageContainer">
                <Image
                  className="ourThoughtsImage"
                  src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                    data.id
                  }/${data.images[0]}`}
                  fill
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र, ७३ प्रतिशत भौतिक
                    प्रगति।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">राजन मगर</span>
                  <span
                    className="separator"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#969696",
                    }}
                  ></span>
                  <span className="posted">
                    {dateFormatter(moment(`${data?.created}`).fromNow())}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurThoughts;
