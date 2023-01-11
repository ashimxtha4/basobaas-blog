import { Icon } from "@iconify/react";
import Image from "next/image";
import downImage from "../../public/Images/downImage.svg"


const BottomComponent = () => {

    const blog = {
        image: "https://place-hold.it/32x23",
        title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
    }
    return (
        <div className="bottomComponent">
            <div className="imageDiv">
                <Image className="image" src={downImage} alt="no Image" />
            </div>
            <div className="desDiv">
                <div className="headingDiv">{blog.title}</div>
                <div className="timeDiv">दुई हप्ता पहिले</div>
            </div>
        </div>
    )
}

export default BottomComponent