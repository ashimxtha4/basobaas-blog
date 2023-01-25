import MainProperty from "./MainProperty";
import { useAppSelector } from "../../state";

const DetailProperty = () => {
  const data = useAppSelector(
    (state) => state?.premiumPropertyData?.data?.data
  );

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
