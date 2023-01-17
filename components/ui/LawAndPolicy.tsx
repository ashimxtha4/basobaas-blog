import { Icon } from "@iconify/react";
import Image from "next/image";
import LawAndPolicyImage1 from "../../public/Images/LawAndPolicyImage.svg";
import LawAndPolicyImage2 from "../../public/Images/lawAndPolicyImage2.svg";
import LawAndPolicyImage3 from "../../public/Images/lawAndPolicyImage3.svg";
import LawAndPolicyImage4 from "../../public/Images/lawAndPolicyImage4.svg";

const LawAndPolicy = (props: any) => {
  return (
    <>
      <div className="lawPolicyTitleDiv">
        <label className="lawPolicyTitle">{props.title}</label>
        <span className="lawPolicyViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="lawPolicyCardDiv">
        <div className="lawPolicyCard">
          <div className="imageContainer">
            <Image
              className="image"
              src={LawAndPolicyImage1}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>कानुन र नीति</p>
            </div>
            <div className="blogHeader">
              <p>
                नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र, ७३ प्रतिशत भौतिक
                प्रगति।
              </p>
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
              <span className="posted">२ हप्ता अघि</span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            <Image
              className="image"
              src={LawAndPolicyImage2}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>कानुन र नीति</p>
            </div>
            <div className="blogHeader">
              <p>
                पद्मा कोलोनीः उत्कृष्ट डिजाइनका घरमा आकर्षक फर्निचरको प्रयोग ।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">कपिल कार्की</span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">२ हप्ता अघि</span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            <Image
              className="image"
              src={LawAndPolicyImage3}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>कानुन र नीति</p>
            </div>
            <div className="blogHeader">
              <p>
                तुलसी विवाह किन र कसरी गर्ने ! यस्ता छन् जान्नैपर्ने कुराहरू।
              </p>
            </div>
            <div className="blogBy">
              <span className="author">कमल पण्डित</span>
              <span className="separator">
                <Icon
                  icon="ci:dot-05-xl"
                  width="15"
                  height="15"
                  color="#969696"
                />
              </span>
              <span className="posted">२ हप्ता अघि</span>
            </div>
          </div>
        </div>
        <div className="lawPolicyCard">
          <div className="imageContainer">
            <Image
              className="image"
              src={LawAndPolicyImage4}
              alt="basobaas Nepal"
            />
          </div>
          <div className="blogContents">
            <div className="blogCategoryTitle">
              <p>कानुन र नीति</p>
            </div>
            <div className="blogHeader">
              <p>सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।</p>
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
              <span className="posted">२ हप्ता अघि</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawAndPolicy;
