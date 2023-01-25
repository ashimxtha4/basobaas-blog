import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import LawAndPolicyImage1 from "../../public/Images/LawAndPolicyImage.svg";
import LawAndPolicyImage2 from "../../public/Images/lawAndPolicyImage2.svg";
import LawAndPolicyImage3 from "../../public/Images/lawAndPolicyImage3.svg";
import LawAndPolicyImage4 from "../../public/Images/lawAndPolicyImage4.svg";
import { useAppSelector } from "../../state/index";

const LawAndPolicy = ({
  data,
  title,
  cate_slug,
}: {
  data: any;
  title: string;
  cate_slug: string;
}) => {
  const categoryData = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );
  const router = useRouter();
  return (
    <>
      <div className="lawPolicyTitleDiv">
        <label className="lawPolicyTitle">{title}</label>
        <span
          className="lawPolicyViewAllButton"
          onClick={() => {
            router.push(`/category/${cate_slug}`);
          }}
        >
          सबै हेर्नुहोस्
        </span>
      </div>
      <div className="lawPolicyCardDiv">
        {data?.map((data: any, index: number) => (
          <div
            className="lawPolicyCard"
            key={index}
            onClick={() => {
              router?.push(`/blog/${data?.slug}`);
            }}
          >
            <div className="imageContainer">
              <Image
                className="image"
                src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                  data.id
                }/${data.images[0]}`}
                fill
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogCategoryTitle">
                <p>
                  {
                    categoryData?.find((obj: any) => obj.id == data.category)
                      ?.name_np
                  }
                </p>
              </div>
              <div className="blogHeader">
                <p>{data?.title_np}</p>
              </div>
              <div className="blogBy">
                <span className="author">राजन अधिकारी</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">
                  {moment(`${data?.created}`).fromNow()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LawAndPolicy;
