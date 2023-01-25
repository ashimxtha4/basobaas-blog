import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBlogMainImage from "../../public/Images/blogDetailsImage1.svg";
import { useAppSelector } from "../../state";

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
            // src={`https://pocketbase.asterdio.xyz/${data[0]?.images[0]}`}
            // src={`${process.env.NEXT_PUBLIC_APP_API_URL as string}${
            //   data[0].images[0]
            // }`}
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
              data[0]?.id
            }/${data[0]?.images[0]}`}
            alt="Basobaas Nepal"
            layout="fill"
          />
        </div>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <Link className="blogTagLinks" href="#">
              <p>
                {/* यात्रा */}
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
            <div className="posted">२ हप्ता अघि</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogTypeMain;
