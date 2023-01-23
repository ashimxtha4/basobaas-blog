import { Icon } from "@iconify/react";
import Image from "next/image";
import moment from "moment";
import { useAppSelector } from "../../state";
import { useRouter } from "next/router";
import Link from "next/link";

const LifeStyle = () => {
  const data = useAppSelector((state) => state?.blogData?.lifestyle?.items);
  const categoryData = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );
  const router = useRouter();

  return (
    <>
      <div className="lifeStyleTitleDiv">
        <label className="lifeStyleTitle">जीवनशैली</label>
        <Link href={"/category/lifestyle"}>
          <span className="lifeStyleViewAllButton">सबै हेर्नुहोस्</span>
        </Link>
        {/* <span className="lifeStyleViewAllButton">सबै हेर्नुहोस्</span> */}
      </div>
      <div className="lifeStyleCardDiv">
        {data?.map((data, index) => {
          return (
            <div
              className="lifeStyleCard"
              key={index}
              onClick={() => {
                router.push(`/blog/${data?.slug}`);
              }}
            >
              <div className="lifestyle">
                <div className="thumbnail">
                  <img
                    className="image"
                    src={`${process.env.NEXT_PUBLIC_APP_API_URL as string}${
                      data.images[0]
                    }`}
                    alt="basobaas nepal"
                  />
                </div>
                <div className="cardContent">
                  <div className="blogCategoryTag">
                    <p>
                      {
                        categoryData?.find(
                          (obj: any) => obj.id == data?.category
                        )?.name_np
                      }
                    </p>
                  </div>
                  <div className="blogTitle">
                    <p>{data?.title_np}</p>
                  </div>
                  <div className="blogBy">
                    <div className="author">राजन अधिकारी</div>
                    <div className="separator">
                      <Icon
                        icon="ci:dot-05-xl"
                        width="15"
                        height="15"
                        color="#FFFFFF"
                      />
                    </div>
                    <div className="posted">
                      {moment(`${data?.created}`).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LifeStyle;
