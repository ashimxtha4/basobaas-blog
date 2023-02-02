import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { dateFormatter } from "../../utilities/helper";
import moment from "moment";
import { useRouter } from "next/router";
import Skeleton from "./skeleton";

const HomeBlogTypeSmall = ({
  data,
  loading,
}: {
  data: any;
  loading: string;
}) => {
  const categoryList = useAppSelector((state) => state.categoryData.data.items);
  const router = useRouter();

  return (
    <>
      <div className="smallComponentDiv">
        {loading == "loading" ? (
          <>
          <div className="smallComponent"><Skeleton/></div>
          <div className="smallComponent"><Skeleton/></div>
          <div className="smallComponent"><Skeleton/></div>
          <div className="smallComponent"><Skeleton/></div>

          </>
        ) : (
          data?.slice(1).map((data: any, index: number) => (
            <div
              className="smallComponent"
              key={index}
              onClick={() => {
                router.push(`/blog/${data.slug}`);
              }}
            >
              <div className="homeBlogTypeSmall">
                <div className="thumbnail">
                  <Image
                    className="blogCardBackground"
                    src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                      data.id
                    }/${data.images[0]}`}
                    height={250}
                    width={250}
                    // fill

                    alt="Basobaas Nepal"
                  />
                </div>
                <div className="cardContent">
                  <div className="blogCategoryTag">
                    <p>
                      {
                        categoryList?.find(
                          (obj: any) => obj.id == data.category
                        )?.name_np
                      }
                    </p>
                  </div>
                  <div className="blogTitle">
                    <p>{data?.title_np}</p>
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
                      {" "}
                      {dateFormatter(moment(`${data?.created}`).fromNow())}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HomeBlogTypeSmall;
