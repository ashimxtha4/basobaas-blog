import { Icon } from "@iconify/react";
import Image from "next/image";




const BottomComponent = (props:any) => {

    const blog = {
        image: "https://place-hold.it/32x23",
        title: "सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।",
    }
    return (
        <div className="bottomComponent">
            <div className="imageDiv">
                {/* <div className="hover">
                    <span className="playButton">
                        <Image src={playButton} alt="no Image" />
                    </span>
                </div> */}
                <Image className="image" src={props.image} alt="no Image" />
            </div>
            <div className="desDiv">
                <div className="headingDiv">{blog.title}</div>
                <div className="timeDiv">२ हप्ता अघि</div>
            </div>
        </div>
    )
}

export default BottomComponent