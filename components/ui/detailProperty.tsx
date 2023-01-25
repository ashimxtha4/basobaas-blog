import MainProperty from "./MainProperty";
import FeaturedPropertyImage1 from "../../public/Images/featuredPropertyImage1.svg";
import FeaturedPropertyImage2 from "../../public/Images/featuredPropertyImage2.svg";
import FeaturedPropertyImage3 from "../../public/Images/featuredPropertyImage3.svg";
import FeaturedPropertyImage4 from "../../public/Images/featuredPropertyImage4.svg";
import LifestyleImages from "../../public/Images/LifestyleImages.svg";
import { useAppSelector } from "../../state";

const DetailProperty = () => {

  const data =useAppSelector((state) => state?.premiumPropertyData?.data?.data);
  return (
    <div className="detailPropertyListDiv">
      <div className="propertyListTitleDiv">
        <label className="propertyListTitle">विशेष घर जग्गाहरु</label>
        <span className="propertyListViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="propertyCardDiv">
        {data?.map((data: any, index: number) => (
          <div className="propertyCard" key={index}>
            <MainProperty data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProperty;
