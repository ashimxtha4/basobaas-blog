import moment from "moment";
import Image from "next/image";
import play from "../../public/Images/play.svg";
import { dateFormatter } from "../../utilities/helper";

const BottomComponent = (props: any) => {
  const blog = {
    image: "https://place-hold.it/32x23",
    title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
  };
  return (
    <div className="bottomComponent">
      <div className="imageDiv">
        <div className="hover">
          <span className="playButton">
            <Image src={play} className="img" alt="no Image" />
          </span>
        </div>
        <Image className="image" src={props.image} alt="no Image" />
      </div>
      <div className="desDiv">
        <div className="headingDiv">{props.title}</div>
        <div className="timeDiv">
          {dateFormatter(moment(`${props?.created}`).fromNow())}
        </div>
      </div>
    </div>
  );
};

export default BottomComponent;
