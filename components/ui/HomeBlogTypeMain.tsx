import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { dateFormatter } from "../../utilities/helper";
import moment from "moment";
import Skeleton from "./skeleton";

const HomeBlogTypeMain = () => {
  const router = useRouter();
  const { data, loading } = useAppSelector((state) => state.blogData);
  const categoryList = useAppSelector((state) => state.categoryData.data.items);
  return (
    <>
      <div className="homeBlogTypeMain">
        {loading == "loading" ? (
          <Skeleton />
        ) : (
          <>
            <div
              className="thumbnail"
              onClick={() => router.push(`blog/${data[0]?.slug}`)}
            >
              <Image
                className="blogCardBackground"
                src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                  data[0]?.id
                }/${data[0]?.images[0]}`}
                alt="Basobaas Nepal"
                height={638}
                width={400}
                priority
                loading={"eager"}
                quality={75}
              />
            </div>
            <div className="cardContent">
              <div className="blogCategoryTag">
                <Link className="blogTagLinks" href="#">
                  <p>
                    {
                      categoryList?.find(
                        (obj: any) => obj.id == data[0]?.category
                      )?.name_np
                    }
                  </p>
                </Link>
              </div>
              <div className="blogTitle">
                <p>{data[0]?.title_np}</p>
              </div>
              <div className="blogBy">
                <div className="author">राजन अधिकारी</div>
                <span
                  className="separator"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#FFF",
                  }}
                ></span>
                <div className="posted">
                  {dateFormatter(moment(`${data[0]?.created}`).fromNow())}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeBlogTypeMain;
