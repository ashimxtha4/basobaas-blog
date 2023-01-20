import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import LawAndPolicyImage1 from "../../public/Images/LawAndPolicyImage.svg";
import LawAndPolicyImage2 from "../../public/Images/lawAndPolicyImage2.svg";
import LawAndPolicyImage3 from "../../public/Images/lawAndPolicyImage3.svg";
import LawAndPolicyImage4 from "../../public/Images/lawAndPolicyImage4.svg";
import { useAppSelector } from "../../state/index";

const LawAndPolicy = ({ data, title }: { data: any; title: string }) => {
  const categoryData = useAppSelector(
    (state) => state?.categoryData?.data?.items
  );
  return (
    <>
      <div className="lawPolicyTitleDiv">
        <label className="lawPolicyTitle">{title}</label>
        <span className="lawPolicyViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="lawPolicyCardDiv">
        {data?.map((data: any, index: number) => (
          <div className="lawPolicyCard" key={index}>
            <div className="imageContainer">
              <Image
                className="image"
                src={LawAndPolicyImage1}
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
