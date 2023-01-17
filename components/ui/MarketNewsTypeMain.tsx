import { Icon } from "@iconify/react";
import Image from "next/image";
import HomeBlogMainImage from "../../public/Images/MarketNewsImage.svg";

const MarketNewsTypeMain = () => {
  return (
    <>
      <div className="marketNewsTypeMain">
        <div className="imageContainer">
          <Image
            src={HomeBlogMainImage}
            alt="Basobaas Nepal"
            className="image"
            height={300}
          />
        </div>
        <div className="blogContents">
          <div className="blogCategoryTitle">
            <p>निर्माण</p>
          </div>
          <div className="blogHeader">
            <p>सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।</p>
          </div>
          <div className="blogBody">
            <p>
              घर भनेको एकल-इकाई आवासीय भवन हो। यो प्रारम्भिक झुपडीबाट काठ,
              चिनाई, कंक्रीट वा अन्य सामग्रीको जटिल संरचना सम्मको जटिलतामा हुन
              सक्छ, आउटफिट गरिएको बुद्धि...
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
            <span className="posted"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketNewsTypeMain;
