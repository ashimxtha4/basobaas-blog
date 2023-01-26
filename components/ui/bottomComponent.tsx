import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import play from "../../public/Images/play.svg";
import { dateFormatter } from "../../utilities/helper";

const BottomComponent = ({ data }: { data: any }) => {
  console.log("video data", data);
  return (
    <Link href={data.link} target="_blank">
      <div className="bottomComponent">
        <div className="imageDiv">
          <div className="hover">
            <span className="playButton">
              <Image src={play} className="img" alt="no Image" />
            </span>
          </div>
          <Image
            className="image"
            src={`${process.env.NEXT_PUBLIC_APP_VIDEOS_URL as string}${
              data?.id
            }/${data?.thumbnail}`}
            fill
            alt="no Image"
          />
        </div>
        <div className="desDiv">
          <div className="headingDiv">{data.title}</div>
          <div className="timeDiv">
            {dateFormatter(moment(`${data.updated}`).fromNow())}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BottomComponent;
