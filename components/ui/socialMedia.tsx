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

const SocialMedia = ({ methode }: { methode: any }) => {
  const router = useRouter();
  const socialMediaList: any = [
    <FacebookShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="bi:facebook" color="blue" width="40" height="40" />
    </FacebookShareButton>,
    <EmailShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="logos:google-gmail" width="40" height="40" />
    </EmailShareButton>,
    <LinkedinShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="mdi:linkedin" color="blue" width="40" height="40" />
    </LinkedinShareButton>,
    <TelegramShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="logos:telegram" width="40" height="40" />
    </TelegramShareButton>,
    <TwitterShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="mdi:twitter" color="#1da1f2" width="40" height="40" />
    </TwitterShareButton>,
    <ViberShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="simple-icons:viber" color="purple" width="40" height="40" />
    </ViberShareButton>,
    <WhatsappShareButton url="https://basobaasblog.asterdio.xyz">
      <Icon icon="logos:whatsapp-icon" width="40" height="40" />
    </WhatsappShareButton>,
  ];
  return (
    <div className="socialContainerDiv">
      {/* <div className="row">
      </div> */}
      {socialMediaList.map((values: any, index: number) => (
        <div className="socialComponent" key={index} onClick={()=>{methode(false)}}>
          <label className="buttons">{values}</label>
          <span className="socialName">Facebook</span>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
