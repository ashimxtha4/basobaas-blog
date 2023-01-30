import { Icon } from "@iconify/react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";

const SocialMedia = () => {
  const router = useRouter();
  const socialMediaList: any = [
    <FacebookShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </FacebookShareButton>,
    <EmailShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </EmailShareButton>,
    <LinkedinShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </LinkedinShareButton>,
    <TelegramShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </TelegramShareButton>,
    <TwitterShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </TwitterShareButton>,
    <ViberShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </ViberShareButton>,
    <WhatsappShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="20" height="20" />
    </WhatsappShareButton>,
  ];
  return (
    <div className="containerDiv">
      <div className="row">
        {/* {socialMediaList.map((values:any,index:number)=>)} */}
      </div>
    </div>
  );
};

export default SocialMedia;
