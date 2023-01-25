import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { dateFormatter } from "../../utilities/helper";
import moment from "moment";

const HomeBlogTypeMain = () => {
  const router = useRouter();
  const { data, loading } = useAppSelector((state) => state.blogData);
  const categoryList = useAppSelector((state) => state.categoryData.data.items);
  return (
    <>
      <div className="homeBlogTypeMain">
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
            fill
          />
        </div>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <Link className="blogTagLinks" href="#">
              <p>
                {
                  categoryList?.find((obj: any) => obj.id == data[0]?.category)
                    ?.name_np
                }
              </p>
            </Link>
          </div>
          <div className="blogTitle">
            <p>{data[0]?.title_np}</p>
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
              {dateFormatter(moment(`${data[0]?.created}`).fromNow())}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogTypeMain;
