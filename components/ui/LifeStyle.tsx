import { Icon } from "@iconify/react";
import moment from "moment";
import { useAppSelector } from "../../state";
import { useRouter } from "next/router";
import Link from "next/link";
import { dateFormatter } from "../../utilities/helper";
import Image from "next/image";

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
                  <Image
                    width={300}
                    height={200}
                    className="image"
                    src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                      data.id
                    }/${data.images[0]}`}
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
                      {dateFormatter(moment(`${data?.created}`).fromNow())}
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
