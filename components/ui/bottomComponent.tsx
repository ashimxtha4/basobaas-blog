import { Icon } from "@iconify/react";
import Image from "next/image";
import downImage from "../../public/Images/downImage.svg"


const BottomComponent = () => {

    const blog = {
        image: "https://place-hold.it/32x23",
        title: "The most expensive area of nepal with most expensive house",
    }
    return (
        <div className="bottomComponent">
            <div className="imageDiv">
                <Image className="image" src={downImage} alt="no Image" />
            </div>
            <div className="desDiv">
                <div className="headingDiv">{blog.title}</div>
                <div className="timeDiv">2 weeks Ago</div>
            </div>
        </div>
    )
}

export default BottomComponent